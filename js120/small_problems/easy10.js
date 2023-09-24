class Pet {
  constructor(type, name) {
    this.type = type;
    this.name = name;
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.pets = [];
  }
  
  numberOfPets() {
    return this.pets.length;
  }
  
  printPets() {
    console.log(`${this.name} has adopted the following pets:`);
    this.pets.forEach(p => {
      console.log(`a ${p.type} named ${p.name}`);
    })
  }
}

class Shelter {
  constructor() {
    this.adoptions = [];
    this.owners = [];
  }
  
  
  adopt(owner, pet) {
    owner.pets.push(pet);
    if (!this.owners.includes(owner))
      this.owners.push(owner);
  }
  
  printAdoptions() {
    this.owners.forEach(o => o.printPets());
  }
}

let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);