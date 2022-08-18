"use strict";

// const multiple = {
//   [Symbol.iterator]() {
//     const max = 10;
//     let num = 0;
//     return {
//       next() {
//         return { value: num++ * 2, done: num > max };
//       },
//     };
//   },
// };

function* multipleGenerator() {
  try {
    for (let i = 0; i < 10; i++) {
      console.log(i);
      //사용자가 원할때까지 기다리면서 하나하나 리턴함
      yield i ** 2;
    }
  } catch (error) {
    console.log("error!");
  }
}

const multiple = multipleGenerator();
let next = multiple.next();
console.log(next.value, next.done);

// multiple.return(); // 끝냄
multiple.throw("Error!");

next = multiple.next();
console.log(next.value, next.done);
