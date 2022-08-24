// const dog1 = { name: "뭉치", age: 1 };
// const dog2 = { name: "코코", age: 2 };

function Dog(name, age) {
  this.name = name;
  this.age = age;
  //인스턴스 레벨의 함수 => 만들어진 인스턴스마다 똑같이 다 가지고 있음
  // this.printName = () => {
  //   console.log(`${this.name} ${this.age}`);
  // };
}

//프로토타입 레벨의 함수

Dog.prototype.printName = function () {
  console.log(`${this.name} ${this.age}`);
};
const dog1 = new Dog("뭉치", 1);
const dog2 = new Dog("코코", 2);
console.log(dog1, dog2);

dog1.printName();

// 오버라이딩
// 인스턴스 레벨에서 (자식) 동일한 이름으로 함수를 재정의 하면 (오버라이딩 하면)
// 프로토타입 레벨의(부모) 함수의 프로퍼티는 가려진다 (섀도잉 됨);

dog1.printName = function () {
  console.log("안녕");
};

dog1.printName();

// 정적 레벨
Dog.hello = () => {
  console.log("Hello");
};

Dog.hello();
Dog.Max_Age = 20;
