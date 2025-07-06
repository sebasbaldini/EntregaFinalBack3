import { expect } from 'chai';
import { AdoptionService } from '../services/adoption.service.js';

describe('Adoption Service - Unit tests', () => {
  const adoptionService = new AdoptionService();

  it('debería retornar todas las adopciones como un array', () => {
    const adoptions = adoptionService.getAllAdoptions();
    expect(adoptions).to.be.an('array');
  });

  it('debería crear una nueva adopción', () => {
    const mockAdoption = {
      petName: 'Luna',
      adopterName: 'Juan Pérez',
      adopterEmail: 'juan@example.com'
    };

    const created = adoptionService.createAdoption(mockAdoption);

    expect(created).to.be.an('object');
    expect(created).to.have.property('id');
    expect(created).to.include({
      petName: mockAdoption.petName,
      adopterName: mockAdoption.adopterName,
      adopterEmail: mockAdoption.adopterEmail
    });
  });
});
