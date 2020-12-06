'use strict';

//class = template
//object = instance of a class

// 1. Class 선언법

class person {
  //constructor 생성자
  constructor(name, age) {
  //fields
  this.name = name;
  this.age = age;
  }

  //methods
  speak() {
    console.log(`${this.name}: hello!`);
  }
}

const jaeyun = new person('jaeyun', 28);
console.log(jaeyun.name);
console.log(jaeyun.age);
jaeyun.speak();

// Getter (값을 리턴) and setters (값을 설정 밸류를 받아와야함)

class User {
  constructor(firstName, lastName, age) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }
  
  get age() {
    return this._age;
  }

  set age(value) {
    // if(value < 0) {
    //   throw Error('age can not be negative');
    // }
    this._age = value < 0 ? 0 : value;
  }
}

const user1 = new User('Steve', 'Job', -1);
console.log(user1.age);

//public, private

class Experiment {
  publicField = 2;
  #privateField = 0;
}

const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

//상속과 다양성


class shape {
  constructor(width, height, color) {
    this.width = width;
    this.height = height;
    this.color = color;
  }

  draw() {
    console.log(`drawing ${this.color} color of`);
  }

  getArea() {
    return this.width * this.height;
  }
}

class Rectangle extends shape {}
class Triangle extends shape {
  draw() {
    super.draw(); //공통 부모 드로우 부분도 호출됨 
    console.log('🔺');
  }
  getArea() {
    return (this.width * this.height) / 2;
  }
  toString() {
    return `window + . 하면 ${this.color} 삼각형 있음.`
  }
}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
console.log(rectangle);
console.log(rectangle.getArea());

const triangle = new Triangle(20, 20, 'red');
triangle.draw();
console.log(triangle);
console.log(triangle.getArea());

// 6. Class instanceOf 왼쪽에 있는 오브젝트가 오른쪽에있는 클래스를 이용하여 만든지 확인

console.log(rectangle instanceof Rectangle);
console.log(triangle instanceof Rectangle);
console.log(triangle instanceof Triangle);
console.log(triangle instanceof shape);
console.log(triangle instanceof Object);
console.log(triangle.toString());