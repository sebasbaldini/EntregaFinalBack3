import request from 'supertest';
import { expect } from 'chai';
import app from '../app.js';

describe('Usser Routes - Integraticion', () =>{
    it('GET /api/users esperamos un LIstado de usuarios con codigo 200', async () =>{
        const res = await request(app).get('/api/users');
        expect(res.status).to.equal(200);
        expect(res.body).to.be.an('array');
    })
    it('GET /api/users/:id esperamos un LIstado de usuarios en formato objeto', async () =>{
        const res = await request(app).get('/api/users/1');
        expect(res.status).to.be.oneOf([200, 404]); // 200 si existe 404 error si no existe
        if(res.status === 200 ){
            expect(res.body).to.have.property('id');
        }
    })

    it('POST /api/users esperamos la creacion de un nuevo usuario', async () =>{
        const newUser = {
            email: 'tester@user.com',
            password: '123456',
            username: 'testers'
        };
        const res = await request(app).post('/api/users').send(newUser);
        expect(res.status).to.equal(201);
        expect(res.body).to.include.keys('id', 'username', 'email');
        expect(res.body.username).to.equal(newUser.username);
        expect(res.body.email).to.equal(newUser.email);
        //expect(res.body.password).to.equal(newUser.password);//porq esta hasheada 
    });

})