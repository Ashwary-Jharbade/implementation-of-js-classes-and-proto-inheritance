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

// Proto Inheritance
let poke = {
    name: "Garados",
    attack: "Water Gun",
    getName() {
        return this.name;
    },
    getAttack() {
        return this.getAttack;
    }
}

let trainer = {
    tname: "Satoshi",
    age: 18,
    getTName() {
        return this.tname;
    },
    getAge() {
        return this.age;
    }
}

trainer.prototype = Object.create(poke);

console.log(trainer);
