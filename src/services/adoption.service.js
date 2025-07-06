import { AdoptionRepository } from '../repositories/adoption.repository.js';

export class AdoptionService {
  constructor() {
    this.repo = new AdoptionRepository();
  }

  getAllAdoptions() {
    return this.repo.findAll();
  }

  getAdoptionById(id) {
    return this.repo.findById(id);
  }

  createAdoption(data) {
    // Podés agregar validaciones aquí
    return this.repo.create(data);
  }

  deleteAdoptionById(id) {
    return this.repo.deleteById(id);
  }
}
