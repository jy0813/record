"use strict";

//얕은 복사 Shallow Copy - 객체는 메모리 주소 전달
//자바스크립트에서 복사할때는 항상 얕은 복사가 이루어짐!
//Araay.from, concat, slice, spread(...), Object.assign

/**function(obj) {
  //함수 내부에서 오브젝트 수정 ❌❌
}*/

const pig = { name: "🐖", price: 3, owner: { name: "sujeong" } };
const cat = { name: "😺", price: 2 };
const person = { name: "😎", price: 1 };
const store1 = [pig, cat];
const store2 = Array.from(store1);
console.log("store1", store1);
console.log("store2", store2);

store2.push(person);
console.log("store1", store1);
console.log("store2", store2);

cat.price = 4;

console.log("store1", store1);
console.log("store2", store2);
