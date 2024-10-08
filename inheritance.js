class Animal {
    constructor(name) {
      this.name = name;
    }
  
    speak() {
      console.log(`${this.name} makes a noise.`);
    }
  }
  
  class Dog extends Animal {
    constructor(name, breed) {
      super(name);
      this.breed = breed;
    }
  
    speak() {
      console.log(`${this.name}, a ${this.breed}, barks.`);
    }
  }
  
  const dog = new Dog("Buddy", "Golden Retriever");
  dog.speak();