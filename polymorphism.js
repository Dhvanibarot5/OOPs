class Animals {
  constructor(name) {
    this.name = name;
  }

  speak() {
    console.log(`${this.name} makes a sound.`);
  }
}

class Dogs extends Animals {
  speak() {
    console.log(`${this.name} barks.`);
  }
}

class Cat extends Animals {
  speak() {
    console.log(`${this.name} meows.`);
  }
}

const animal = new Animals("Generic Animal");
const dogs = new Dogs("Buddy");
const cat = new Cat("Whiskers");

animal.speak();
dogs.speak();
cat.speak();
