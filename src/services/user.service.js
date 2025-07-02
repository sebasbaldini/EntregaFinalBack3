import { UserRepository } from "../repositories/user.repository.js";
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';

const SALT_ROUNDS = 10;


export class UserService {
    constructor(){
        this.userRepo = new UserRepository();
    }

    getAllUsers(){
        return this.userRepo.findAll();
    }

    registerUser({email, password, username}){
        const existingUserEmail = this.userRepo.findByEmail(email)
        if(existingUserEmail){
            throw new Error ("Email already in use")
        }
        const existingUserName = this.userRepo.findByUserName(username)
        if(existingUserName){
            throw new Error ("UserName already in use")
        }

        const hashedPassword = bcrypt.hashSync(password, SALT_ROUNDS);
    

        const newUser = this.userRepo.create ({
            email,
            password: hashedPassword,
            username
        });
        return newUser;
    }

    loginUser({email, password}){
        const user = this.userRepo.findByEmail(email);
        if(!user) throw new Error('Invalid credentials (email)');

        const validPassword = bcrypt.compareSync(password, user.password);
        if (!validPassword) throw new Error ('Invalid credentials (password)');

        const token = jwt.sign(
            {id: user.id, username: user.username, email: user.email},
            process.env.JWT_SECRET,
            {expiresIn: '1h'}
        );

        return {token, user: {id: user.id, username: user.username, email: user.email}};
    }


    getUserById(id) {
        return this.userRepo.findById(id);
    }

}

