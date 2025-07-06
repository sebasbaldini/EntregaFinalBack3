import { AdoptionService } from '../services/adoption.service.js';

const service = new AdoptionService();

export class AdoptionController {
  static getAll(req, res) {
    try {
      const adoptions = service.getAllAdoptions();
      res.json(adoptions);
    } catch (err) {
      res.status(500).json({ error: 'Error al obtener adopciones' });
    }
  }

  static getById(req, res) {
    const { id } = req.params;
    try {
      const adoption = service.getAdoptionById(id);
      if (!adoption) return res.status(404).json({ error: 'Adopción no encontrada' });
      res.json(adoption);
    } catch (err) {
      res.status(500).json({ error: 'Error al buscar adopción' });
    }
  }

  static create(req, res) {
    const { petName, adopterName, adopterEmail } = req.body;
  
    if (!petName || !adopterName || !adopterEmail) {
      return res.status(400).json({ error: 'Faltan datos obligatorios' });
    }
  
    try {
      const newAdoption = service.createAdoption({ petName, adopterName, adopterEmail });
      return res.status(201).json(newAdoption);
    } catch (error) {
      return res.status(500).json({ error: 'Error al crear adopción' });
    }
  }
  

  static delete(req, res) {
    const { id } = req.params;
    try {
      const deleted = service.deleteAdoptionById(id);
      if (!deleted) return res.status(404).json({ error: 'Adopción no encontrada' });
      res.status(204).send();
    } catch (err) {
      res.status(500).json({ error: 'Error al eliminar adopción' });
    }
  }
}
