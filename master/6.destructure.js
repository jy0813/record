"use strict";

//구조 분해 할당 Desturcturing Assignment
// 데이터 뭉치(그룹화)를 쉽게 만들수 있다.

const fruits = ["사과", "키위", "딸기", "바나나"];
const [first, second, ...others] = fruits;
console.log(first);
console.log(second);
console.log(others);

const point = [1, 2, 8];
const [x, y, z = 0] = point;
console.log(x);
console.log(y);
console.log(z);

function createEmoji() {
  return ["돼지", "🐖"];
}

const [title, emoji] = createEmoji();
console.log(title);
console.log(emoji);

const pig = { name: "pig", age: 1, job: "animal" };

function display({ name, age, job }) {
  console.log("이름", name);
  console.log("나이", age);
  console.log("직업", job);
}
display(pig);

const { name, age, job: occupation, money = "없음" } = pig;
console.log(name);
console.log(age);
console.log(occupation);
console.log(money);
