"use strict";

//[Symbol.iterator]() : Iterator{ next() : {value, done}};
//0부터 10이하까지 숫자의 2배를 순회하는 이터레이터(반복자) 만들기!

function iteratorNum(start, end) {
  let startNum = start;
  let endNum = end;

  const multiple = {
    [Symbol.iterator]() {
      return {
        next() {
          let result = {
            value: startNum * 2,
            done: startNum > endNum,
          };
          startNum++;
          return result;
        },
      };
    },
  };
  return multiple;
}

let iterator = iteratorNum(0, 10);
for (const item of iterator) {
  console.log(item);
}

console.log("------------------------");
//답안

const multiple2 = {
  [Symbol.iterator]() {
    const max = 10;
    let num = 0;
    return {
      next() {
        return { value: num++ * 2, done: num > max };
      },
    };
  },
};

for (const item of multiple2) {
  console.log(item);
}
