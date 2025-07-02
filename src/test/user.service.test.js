import { expect } from "chai";
import { UserService } from "../services/user.service.js";
process.env.JWT_SECRET = 'ClaveArchiMegaSecreta1234';

describe('User Service - Unit', () => {
    let userService;
    let createUser;

    before(async () => {
        userService = new UserService();

        // Crear un usuario para test
        createUser = await userService.registerUser({
            email: 'test@email.com',
            password: '123456',
            username: 'testUser'
        });
    });

    it('esperamos que retorne todos los usuarios en un array', () => {
        const users = userService.getAllUsers();
        expect(users).to.be.an('array');
        expect(users.length).to.be.greaterThan(0);
    });

    it('esperamos retornar un Usuario por su ID', () => {
        const user = userService.getUserById(createUser.id);
        expect(user).to.be.an('object');
        expect(user).to.have.property('id', createUser.id);
        expect(user).to.have.property('email', createUser.email);
    });

    it('validar si el email existe para que lance un error', () => {
        expect(() =>
            userService.registerUser({
                email: 'test@email.com',
                password: '123456',
                username: 'otroUsuario'
            })
        ).to.throw('Email already in use');
    });

    it('validar si el username existe para que lance un error', () => {
        expect(() =>
            userService.registerUser({
                email: 'test@testUser.com',
                password: '123456',
                username: 'testUser'
            })
        ).to.throw('UserName already in use');
    });

    it('Si al hacer loggin nos retorna el token', async () => {
        const result = await userService.loginUser({
            email: 'test@email.com',
            password: '123456'
        });

        expect(result).to.be.an('object');
        expect(result).to.have.property('token');
        expect(result).to.have.property('user');
        expect(result.user).to.have.property('email', 'test@email.com');
    });

    it('enviamos un password incorrecto y esperamos un Error', () => {
        expect(() => {
            userService.loginUser({
                email: 'test@email.com',
                password: 'equivocado'
            });
        }).to.throw('Invalid credentials (password)');
    });

    it('enviamos un email incorrecto y esperamos un Error', () => {
        expect(() => {
            userService.loginUser({
                email: 'equivocado@email.com',
                password: '123456'
            });
        }).to.throw('Invalid credentials (email)');
    });

});
