"use strict";

//let 재할딩이 가능
let a = 1;
a = 2;

//const 재할당이 불가능
//1. 상수
//2. 상수변수 또는 변수

const text = "Hello";
//text = "hi"; 이렇게하면 안됨!

//1. 상수

const MAX_FRUITS = 5;

//2. 재할당 불가능한 상수변수 또는 변수

const pig = {
  name: "pig",
  color: "pink",
  display: "🐖",
};

// pig = {};
console.log(pig);
pig.name = "dog";
console.log(pig);

//변수가 가르키고있는 오브젝트 값은 변경가능하다.  Mutable
