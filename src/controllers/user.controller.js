import { body, validationResult } from 'express-validator';
import { UserService } from "../services/user.service.js";

const userService = new UserService();

export class UserController {
    static validateCreate = [
        body('email').isEmail().withMessage("invalid email format"),
        body('password').isLength({ min: 6}).withMessage("Password must be at least 6 caracters long"),
        body('username').notEmpty().withMessage("Username is required")
    ];


    static getAllUsers(req, res){
        const users = userService.getAllUsers();
        res.json(users);
    }
    static create(req, res){
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.status(400).json({errors: errors.array()});
        }
        try{
            const user = userService.registerUser(req.body);
            res.status(201).json(user);
        }catch(err){
            res.status(400).json({ error: err.message });
        }
        }
    static login(req, res){
        try{
            const { token, user} = userService.loginUser(req.body);
            res.json({token, user});
        }catch(err){
            res.status(401).json({error: err.message});
        }
    }

    static profileUser(req, res){
        res.json({ message: `Bienvenido ${req.user.username}`, user: req.user})
    }
    static getById(req, res) {
        const { id } = req.params;
        try {
            const user = userService.getUserById(id);
            if (!user) return res.status(404).json({ error: 'Usuario no encontrado' });
            res.json(user);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
    
    static delete(req, res) {
        const { id } = req.params;
        try {
            const deleted = userService.deleteUserById(id);
            if (!deleted) return res.status(404).json({ error: 'Usuario no encontrado' });
            res.status(204).send(); // 204: No Content
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
    static update(req, res) {
        const { id } = req.params;
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
    
        try {
            const updatedUser = userService.updateUser(id, req.body);
            if (!updatedUser) return res.status(404).json({ error: 'Usuario no encontrado' });
            res.json(updatedUser);
        } catch (err) {
            res.status(400).json({ error: err.message });
        }
    }
    
}