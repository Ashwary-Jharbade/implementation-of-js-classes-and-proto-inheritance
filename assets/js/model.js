class Engine {
  constructor(engine, cc) {
    this.engine = engine;
    this.cc = cc;
  }

  getEngine() {
    return this.engine;
  }

  getCC() {
    return this.cc;
  }
}

class Car extends Engine {
  constructor(name, price, engine, cc) {
    super(engine, cc);
    this.name = name;
    this.price = price;
  }

  getName() {
    return this.name;
  }

  getPrice() {
    return this.price;
  }
}

const car = new Car("Bently", "$75000", "V8", "1200");
console.log(car.getName(), car.getPrice(), car.getCC(), car.getEngine());
// o/p - Bently $75000 1200 V8

// Proto Inheritance
let poke = {
  pokemonNameList: ["Garados"],
  pokemonAttackList: {
    Garados: ["Water Gun", "Water ball"],
  },
  getPokemonList() {
    return this.pokemonNameList;
  },
  getPokemonAttacks(name) {
    if (this.pokemonAttackList.hasOwnProperty(name)) {
      return this.pokemonAttackList[name];
    }
    return null;
  },
};

let trainer = {
  name: "Satoshi",
  age: 18,
  getName() {
    return this.name;
  },
  getAge() {
    return this.age;
  },
};

trainer.__proto__ = poke;

console.log(trainer.name, trainer.age);
// o/p - Satoshi 18

console.log(trainer.pokemonNameList);
// o.p - ['Garados']

console.log(trainer.getPokemonAttacks(trainer.pokemonNameList[0]));
// o/p -  ['Water Gun', 'Water ball']
