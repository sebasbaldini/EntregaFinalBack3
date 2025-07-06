import { Router } from 'express';
import { AdoptionController } from '../controllers/adoption.controller.js';

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Adoptions
 *   description: Endpoints para gestión de adopciones
 */

/**
 * @swagger
 * /api/adoptions:
 *   get:
 *     summary: Obtener todas las adopciones
 *     tags: [Adoptions]
 *     responses:
 *       200:
 *         description: Lista de adopciones
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Adoption'
 */

/**
 * @swagger
 * /api/adoptions/{id}:
 *   get:
 *     summary: Obtener una adopción por ID
 *     tags: [Adoptions]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la adopción
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Adopción encontrada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Adoption'
 *       404:
 *         description: Adopción no encontrada
 */

/**
 * @swagger
 * /api/adoptions:
 *   post:
 *     summary: Crear una nueva adopción
 *     tags: [Adoptions]
 *     requestBody:
 *       description: Datos para crear una adopción
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - petName
 *               - adopterName
 *               - adopterEmail
 *             properties:
 *               petName:
 *                 type: string
 *                 description: Nombre de la mascota
 *               adopterName:
 *                 type: string
 *                 description: Nombre del adoptante
 *               adopterEmail:
 *                 type: string
 *                 description: Email del adoptante
 *     responses:
 *       201:
 *         description: Adopción creada
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Adoption'
 *       400:
 *         description: Datos inválidos o incompletos
 */

/**
 * @swagger
 * /api/adoptions/{id}:
 *   delete:
 *     summary: Eliminar una adopción por ID
 *     tags: [Adoptions]
 *     parameters:
 *       - in: path
 *         name: id
 *         description: ID de la adopción
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Adopción eliminada correctamente
 *       404:
 *         description: Adopción no encontrada
 */

/**
 * @swagger
 * components:
 *   schemas:
 *     Adoption:
 *       type: object
 *       properties:
 *         id:
 *           type: string
 *           description: ID único de la adopción
 *         petName:
 *           type: string
 *           description: Nombre de la mascota adoptada
 *         adopterName:
 *           type: string
 *           description: Nombre del adoptante
 *         adopterEmail:
 *           type: string
 *           description: Email del adoptante
 *         createdAt:
 *           type: string
 *           format: date-time
 *           description: Fecha de creación de la adopción
 *       required:
 *         - id
 *         - petName
 *         - adopterName
 *         - adopterEmail
 *         - createdAt
 */

// Rutas
router.get('/', AdoptionController.getAll);
router.post('/', AdoptionController.create);
router.get('/:id', AdoptionController.getById);
router.delete('/:id', AdoptionController.delete);

export default router;
