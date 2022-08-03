"use strict";

// class Tiger {
//   constructor(color) {
//     this.color = color;
//   }

//   eat() {
//     console.log("먹자");
//   }

//   sleep() {
//     console.log("잔다");
//   }
// }

// class Dog {
//   constructor(color) {
//     this.color = color;
//   }

//   eat() {
//     console.log("먹자");
//   }

//   sleep() {
//     console.log("잔다");
//   }

//   play() {
//     console.log("논다");
//   }
// }

class Animal {
  constructor(color) {
    this.color = color;
  }

  eat() {
    console.log("먹자");
  }

  sleep() {
    console.log("잔다");
  }
}

class Tiger extends Animal {}

const tiger = new Tiger("노랑이");
console.log(tiger);
tiger.eat();

class Dog extends Animal {
  constructor(color, name) {
    super(color); //상속하고있는 부모클래스를 가리킴
    this.name = name;
  }
  play() {
    console.log("놀자");
  }
  //오버라이딩 overriding
  eat() {
    super.eat(); // 부모에 있는 eat 함수를 호출 후 더 필요한 기능을 구현
    console.log("오아오오아오악");
  }
}

const dog = new Dog("깜장이", "나");
console.log(dog);
dog.eat();
