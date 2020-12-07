'use strict';

const num = 1;
const num2 = 2;
const result = num + num2;
console.log(result);

const num3 = 3;
const num4 = 4;
const result2 = num3 + num4;
console.log(add(num3, num4));

function add(a, b) {
  return a + b;
}
console.log(add(3, 5));

const sum = add(2, 7);
console.log(sum);


function addNumber(num1, num2) {
  return num1 + num2;
}

const doSomething = addNumber;
const result3 = doSomething(2, 5);

const doSomething2 = addNumber;
const result4 = add(2, 11);
console.log(result4);

//함수 인자 

function print(name, age) {
  console.log(`${name} ${age}`);
}
print('jaeyun', 28);

function surprise(operator) {
  const result5 = operator(2, 3); //add(2, 3)
  console.log(result5);
}
surprise(add);


function gob(gob01, gob02) {
  return gob01 * gob02;
}

function test(test01) {
  const result6 = test01(3, 4);
  console.log(result6);
}
test(gob);

function divide(num1, num2) {
  return num1 / num2;
}
console.log(divide(2,3));

