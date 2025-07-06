import request from 'supertest';
import app from '../app.js'; // donde está tu express app
import { expect } from 'chai';

describe('Adoption Router - Tests funcionales', () => {
  let adoptionId;

  it('debería crear una nueva adopción', async () => {
    const res = await request(app)
      .post('/api/adoptions')
      .send({
        petName: 'Firulais',
        adopterName: 'Juan',
        adopterEmail: 'juan@mail.com',
      });

    expect(res.status).to.equal(201);
    expect(res.body).to.have.property('id');
    adoptionId = res.body.id;
  });

  it('debería obtener una adopción por ID', async () => {
    const res = await request(app).get(`/api/adoptions/${adoptionId}`);

    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('id', adoptionId);
  });

  it('debería eliminar una adopción por ID', async () => {
    const res = await request(app).delete(`/api/adoptions/${adoptionId}`);

    expect(res.status).to.equal(204);
  });

  it('debería devolver 404 al obtener una adopción eliminada', async () => {
    const res = await request(app).get(`/api/adoptions/${adoptionId}`);

    expect(res.status).to.equal(404);
  });
});
