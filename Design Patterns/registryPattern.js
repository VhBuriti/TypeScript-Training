/*
    The registry pattern is
    a design pattern used to store and
    retrieve instances of objects.

    It acts like a central point to manage objects.
*/

class Chicken {
  constructor(id, name, age, breed) {
    this.id = id;
    this.name = name;
    this.age = age;
    this.breed = breed;
  }
}

class ChickenRegistry {
  #chickens = new Map();

  addChicken(chicken) {
    if (!chicken.id) {
      throw new Error("Chicken must have an id");
    }
    this.#chickens.set(chicken.id, chicken);
  }

  getChicken(id) {
    return this.#chickens.get(id);
  }

  removeChicken(id) {
    this.#chickens.delete(id);
  }

  getAllChickens() {
    return [...this.#chickens.values()];
  }
}

const registry = new ChickenRegistry();

const chicken1 = new Chicken(1, "Henrietta", 2, "Leghorn");
const chicken2 = new Chicken(2, "Cluckington", 3, "Plymouth Rock");

registry.addChicken(chicken1);
registry.addChicken(chicken2);

const henrietta = registry.getChicken(1);
console.log(henrietta.name); // Henrietta

registry.removeChicken(1);

const checkHenrietta = registry.getChicken(1);
console.log(checkHenrietta); // undefined
