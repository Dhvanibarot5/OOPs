class Car {
  #brand;
  #fuelLevel;

  constructor(brand) {
    this.#brand = brand;
    this.#fuelLevel = 100;
  }

  #consumeFuel(amount) {
    this.#fuelLevel -= amount;
    if (this.#fuelLevel < 0) {
      this.#fuelLevel = 0;
    }
  }

  start() {
    if (this.#fuelLevel > 0) {
      console.log(`${this.#brand} is starting...`);
      this.#consumeFuel(10);
    } else {
      console.log(`${this.#brand} cannot start, fuel is empty.`);
    }
  }

  refuel() {
    console.log(`${this.#brand} is being refueled...`);
    this.#fuelLevel = 100;
  }

  getFuelLevel() {
    return this.#fuelLevel;
  }
}

const car = new Car("Tesla");
car.start();
console.log(car.getFuelLevel());

car.start();
console.log(car.getFuelLevel());

car.refuel();
console.log(car.getFuelLevel());
