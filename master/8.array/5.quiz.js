"use strict";

// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

let input = ["🍌", "🍓", "🍇", "🍓"];
let output = input.slice();
console.log(input);
console.log(output);
output.splice(1, 1, "🥝");
output.splice(3, 3, "🥝");
console.clear();
console.log(output);
console.clear();
//답안

function replace(array, from, to) {
  const replaced = Array.from(array);
  for (let i = 0; i < replaced.length; i++) {
    if (replaced[i] === from) {
      replaced[i] = to;
    }
  }
  return replaced;
}

const array = ["🍌", "🍓", "🍇", "🍓"];
const arrayResult = replace(array, "🍓", "🥝");
console.log(arrayResult);

console.log("----------");
// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

let input2 = ["🍌", "🥝", "🍇", "🥝"];

let count = (array, targetItem) => {
  let result = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[i] === targetItem) {
      result++;
    }
  }
  return result;
};
console.log(count(input2, "🥝"));

console.log("----------");
// ["🍌", "🥝", "🍇", "🥝"]
let count2 = input2.reduce(
  (accumulator, currentValue) =>
    currentValue === "🥝" ? accumulator + 1 : accumulator,
  0
);

console.log("result: ", count2);

console.log("----------");
// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

const input3 = ["🍌", "🥝", "🍇"];
const input4 = ["🍌", "🍓", "🍇", "🍓"];

let count3 = (array1, array2) => {
  return array1.filter((item) => array2.includes(item));
};

console.log(count3(input3, input4));

//답안

function match(input, search) {
  const searchResult = [];
  for (let i = 0; i < input.length; i++) {
    if (search.includes(input[i])) {
      searchResult.push(input[i]);
    }
  }
  return searchResult;
}
