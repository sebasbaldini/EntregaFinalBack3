import { randomUUID } from 'crypto';

const adoptions = [];

export class AdoptionRepository {
  findAll() {
    return adoptions;
  }

  findById(id) {
    return adoptions.find(adoption => adoption.id === id);
  }

  create({ petName, adopterName, adopterEmail }) {
    const newAdoption = {
      id: randomUUID(),
      petName,
      adopterName,
      adopterEmail,
      createdAt: new Date()
    };
    adoptions.push(newAdoption);
    return newAdoption;
  }

  deleteById(id) {
    const index = adoptions.findIndex(adoption => adoption.id === id);
    if (index === -1) return false;
    adoptions.splice(index, 1);
    return true;
  }
}
