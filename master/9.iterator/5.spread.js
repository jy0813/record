"use strict";

//Spread 연산자, 전개구문
// 모든 interable은 Spread 될 수 있다
// 순회가 간으한 모든 것들은 촤르르륵 펼쳐 질 수 있다.
//func(...iterable)
// [...iterable]
//{...obj}
//EcmaScript 2018

function add(a, b, c) {
  return a + b + c;
}

const nums = [1, 2, 3];

console.log(add(...nums));

//Rest parameters

function sum(first, second, ...nums) {
  console.log(nums);
}

sum(1, 2, 0, 1, 2, 4);

// Array Concat

const fruits1 = ["사과", "키위"];
const fruits2 = ["포도", "복숭아"];
let arr = fruits1.concat(fruits2);
console.log(arr);

arr = [...fruits1, "자두", ...fruits2];
console.log(arr);

//Object
const pig = { name: "pig", age: 1, home: { address: "home" } };
const updated = {
  ...pig,
  job: "animal",
};
console.log(updated);
