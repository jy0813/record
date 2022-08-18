"use strict";

//Iterable 하다는건! 순회가 가능함
//[Symbol.iterator]() : iterator;
//심볼정의를 가진 객체나, 트정한 함수가 Iterator를 리턴한다는것은
//순회 가능한 객체이다 라는걸 알 수 있음
//순회가 가능하면 무엇을 할 수 있나? for..of, spread
const array = [1, 2, 3];

//아이템을 순회하기
for (const item of array) {
  console.log(item);
}

//obj for of 불가
//key 를 출력
const obj = { 0: 1, 1: 2 };
for (const item in obj) {
  console.log(item);
}

const iterator = array.values();
while (true) {
  const item = iterator.next();
  if (item.done) break;
  console.log(item.value);
}
