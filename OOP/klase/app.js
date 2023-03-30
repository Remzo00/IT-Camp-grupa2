// Definisanje klase
class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }
  
    // Definisanje metoda
    sayHello() {
      console.log(`Hello, my name is ${this.name} and I'm ${this.age} years old.`);
    }
  }
  
  // Kreiranje novog objekta na osnovu klase
  const person1 = new Person('John', 30);
  
  // Pozivanje metoda objekta
  person1.sayHello(); // Hello, my name is John and I'm 30 years old.