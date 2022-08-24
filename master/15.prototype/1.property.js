// "uset strict";

const pig = { name: "와우", age: 20 };

console.log(Object.keys(pig));
console.log(Object.values(pig));
console.log(Object.entries(pig));

console.log("name" in pig);
console.log(pig.hasOwnProperty("name"));

// 오브젝트의 각각의 프로퍼티는 프로퍼티 디스크립터라고 하는 객체로 저장됨

//writable - 값을 수정할 수있는지,
//enumerable - 값을 열거할 수있는지,
//configurable - 삭제할 수있는지

const descriptors = Object.getOwnPropertyDescriptors(pig);
console.log(descriptors);

const desc = Object.getOwnPropertyDescriptor(pig, "name");
console.log(desc);

Object.defineProperty(pig, "name", {
  value: "멍멍",
  writable: false,
  enumerable: false,
  configurable: false,
});

console.log(pig.name);
console.log(Object.keys(pig));

delete pig.name;

console.log(pig.name);

console.log("------------");

const student = {};

Object.defineProperties(student, {
  firstName: {
    value: "영희",
  },
  lastName: {
    value: "김",
    writable: false,
  },
  fullNmae: {
    get() {
      return `${this.lastName} ${this.firstName}`;
    },
    set(name) {
      [this.lastName, this.firstName] = name.split("");
    },
    configurable: true,
  },
});
console.log(student);
