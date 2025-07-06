import { User } from '../models/user.model.js';
import { randomUUID } from 'crypto';
const users = [];

export class UserRepository {
    findAll(){
        return users;
    }

    findByEmail(email){
        return users.find(user => user.email === email);
    }
    findByUserName(username){
        return users.find(user => user.username === username);
    }

    create({email, password, username}){
        const newUser = new User({
            id: randomUUID(),
            email,
            password,
            username
        });
        users.push(newUser);
        return newUser;
    }

    findById(id) {
        return users.find(user => user.id === id);
    }

    update(id, data) {
        const index = users.findIndex(user => user.id === id);
        if (index === -1) return null;

        // Actualizar solo los campos que vienen en data
        users[index] = { ...users[index], ...data };
        return users[index];
    }

    delete(id) {
        const index = users.findIndex(user => user.id === id);
        if (index === -1) return false;

        users.splice(index, 1);
        return true;
    }
}
