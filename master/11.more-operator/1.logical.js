"use strict";

//논리연산자 Logical Operator
//&& 그리고
//|| 또는
//단축평가 : short-circuit evaluation

const obj1 = { name: "개" };
const obj2 = { name: "돼지", age: "2" };

if (obj1 && obj2) {
  console.log("둘다 true!");
}

let result = obj1 && obj2;
console.log(result);

result = obj1 || obj2;
console.log(result);

console.log("------------");
//활용예
//조건이 truethy 일때, && 무언가를 해야할 경우
//조건이 falshy일때, || 무언가를 해야 할 경우

function changeAge(animal) {
  if (!animal.age) {
    throw new Error("나이가 없음");
  }
  animal.age = 3;
}

function makeNewAge(animal) {
  if (animal.age) {
    throw new Error("나이가 있음");
  }
  animal.age = 4;
}

obj1.age && changeAge(obj1);
obj2.age && changeAge(obj2);

console.log(obj1);
console.log(obj2);

obj1.age || makeNewAge(obj1);
obj2.age || makeNewAge(obj2);

console.log(obj1);
console.log(obj2);

// null 또는 undefined인 경우를 확인할때

let item;
const price = item && item.price;
console.log(price);

//기본값을 설정
//default parameter 전달하지않거나, undefined 설정
//||값이 falshy한 경우 설정(할당) : 0, -0, null, undefined, ''
function print(message) {
  const text = message || "Hello";
  console.log(text);
}

print();
print(undefined);
print(null);
print(0);
