//프로토타입을 베이스로한 객체지향 프로그래밍

function Animal(name, age) {
  this.name = name;
  this.age = age;
}

Animal.prototype.printName = function () {
  console.log(`${this.name} ${this.age}`);
};

function Dog(name, age, owner) {
  //super(name, age)
  Animal.call(this, name, age);
  this.owner = owner;
}
//Dog.prototype = Object.create(Object.prototype);
Dog.prototype = Object.create(Animal.prototype);

Dog.prototype.play = function () {
  console.log("같이 놀자옹!");
};

function Tiger(name, age) {
  Animal.call(this, name, age);
}
Tiger.prototype = Object.create(Animal.prototype);
Tiger.prototype.hunt = () => {
  console.log("사냥");
};
const tiger1 = new Tiger("어흥", 2);

const dog1 = new Dog("멍멍", 1, "나");

dog1.play();
dog1.printName();
tiger1.hunt();
tiger1.printName();

//상속하는 프로토타입을 확인 가능 (상속도 확인)

console.log(dog1 instanceof Dog);
console.log(dog1 instanceof Animal);
console.log(dog1 instanceof Tiger);
