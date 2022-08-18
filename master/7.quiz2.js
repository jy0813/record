"use strict";

// 퀴즈1: 주어진 배열 안의 딸기 아이템을 키위로 교체하는 함수를 만들기
// 단, 주어진 배열을 수정하지 않도록!
// input: ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🥝', '🍇', '🥝' ]

let input1 = ["🍌", "🍓", "🍇", "🍓"];

const swapAraayItem = (array, item1, item2) => {
  return array.reduce((previousValue, currentValue) => {
    if (currentValue === item1) {
      previousValue.push(item2);
      return previousValue;
    } else {
      previousValue.push(currentValue);
      return previousValue;
    }
  }, []);
};

console.log(swapAraayItem(input1, "🍓", "🥝"));

//답안

function replace(array, from, to) {
  return array.map((item) => (item === from ? to : item));
}

console.log(replace(input1, "🍌", "🐖"));

// 퀴즈2:
// 배열과 특정한 요소를 전달받아,
// 배열안에 그 요소가 몇개나 있는지 카운트 하는 함수 만들기
// input: [ '🍌', '🥝', '🍇', '🥝' ], '🥝'
// output: 2

let input2 = ["🍌", "🥝", "🍇", "🥝"];

let result = (array, item1) => {
  return array.reduce(
    (previousVlaue, currentValue) =>
      currentValue === item1 ? previousVlaue + 1 : previousVlaue,
    0
  );
};
console.log(result(input2, "🥝"));

//답안

function count(array, item) {
  return array.filter((value) => value === item).length;
}

console.log(count(input2, "🍇"));

// 퀴즈3: 배열1, 배열2 두개의 배열을 전달받아,
// 배열1 아이템중 배열2에 존재하는 아이템만 담고 있는 배열 반환
// input: ['🍌', '🥝', '🍇'], ['🍌', '🍓', '🍇', '🍓']
// output: [ '🍌', '🍇' ]

const input3 = ["🍌", "🥝", "🍇"];
const input4 = ["🍌", "🍓", "🍇", "🍓"];

const getIntersectionArray = (array1, array2) => {
  return array1.reduce((previousValue, currentValue) => {
    if (array2.includes(currentValue)) {
      previousValue.push(currentValue);
      return previousValue;
    } else {
      return previousValue;
    }
  }, []);
};

console.log(getIntersectionArray(input3, input4));

//답안

function match(input, search) {
  return input.filter((item) => search.includes(item));
}

console.log(match(input3, input4));

//퀴즈 4
//5이상 (보다 큰)의 숫자들의 평균
const nums = [3, 16, 5, 25, 4, 34, 21];

//1. 5이상인 숫자들을 찾기
//2. 5이상의 숫자들을 더하기
//3. 더한 숫자의 개수만큼 나눠주기
// return Number;

const getAverage = (array) => {
  const [sum, length] = array.reduce(
    (previousValue, currentValue) => {
      if (currentValue > 5) {
        previousValue[0] += currentValue;
        previousValue[1] += 1;
      }
      return previousValue;
    },
    [0, 0]
  );

  return sum / length;
};

console.log(getAverage(nums));

//답안

const result2 = nums
  .filter((num) => num > 5)
  .reduce((avg, num, index, array) => avg + num / array.length, 0);

console.log(result2);
