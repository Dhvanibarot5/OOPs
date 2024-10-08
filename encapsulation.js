class Person {
  #name;
  #age;

  constructor(name, age) {
    this.#name = name;
    this.#age = age;
  }

  getName() {
    return this.#name;
  }

  getAge() {
    return this.#age;
  }

  setAge(newAge) {
    if (newAge > 0) {
      this.#age = newAge;
    } else {
      console.log("Age must be positive");
    }
  }
}

const person = new Person("John", 30);
console.log(person.getName());
console.log(person.getAge());

person.setAge(35);
console.log(person.getAge());

person.setAge(-5);
