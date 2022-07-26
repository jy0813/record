"use strict";

//원시타입(primitive)은 값이 복사되어 전달됨

let a = 1;
let b = a;
b = 2;
console.log(a);
console.log(b);

//객체타입(object)은 참조값(메모리주소, 레퍼런스)가 복사되어 전달됨

let apple = {
  //0x1234
  name: "Apple",
};

let orange = apple; //0x1234

orange.name = "orange";

console.log(apple);
console.log(orange);
