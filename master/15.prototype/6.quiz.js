//클래스를 베이스로한 객체지향 프로그래밍

class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  printName = () => {
    console.log(`${this.name} ${this.age}`);
  };
}

class Dog extends Animal {
  constructor(name, age, owner) {
    super(name, age);
    this.owner = owner;
  }
  play() {
    console.log("같이 놀자");
  }
}

class Tiger extends Animal {
  constructor(name, age, owner) {
    super(name, age);
    this.owner = owner;
  }
  hunt() {
    console.log("사냥 하자");
  }
}

const dog = new Dog("멍멍", 1);
const tiger = new Tiger("어흥", 2);

dog.printName();
tiger.printName();
dog.play();
tiger.hunt();

console.log(dog instanceof Dog);
console.log(dog instanceof Animal);
console.log(dog instanceof Tiger);
console.log(dog instanceof Tiger);
