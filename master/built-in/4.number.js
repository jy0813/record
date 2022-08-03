"use strict";

const num1 = 123;
const num2 = new Number(123);
console.log(num1);
console.log(num2);

console.log(Number.MAX_VALUE);

if (num1 === Number.NaN) {
}
if (Number.isNaN(num1)) {
}

//지수표기법 (매우 크거나 작은 숫자를 표기할때 사용, 10의 n 승으로 표기)
const num3 = 102;
console.log(num3.toExponential());

// 반올림하여 문자열로 변환
const num4 = 1234.15;
console.log(num4.toFixed());

console.log(num4.toString());
console.log(num4.toLocaleString("ar-EG"));

//원하는 자릿수까지 유효하도록 반올림
console.log(num4.toPrecision(5));
console.log(num4.toPrecision(4));
console.log(num4.toPrecision(2));
console.log(num4.toPrecision(1)); // 전체 자릿수가 표기 안될때는 지수표기법

console.log(Number.EPSILON); // 0과 1사이에서 나타낼 수 있는 가장 작은 숫자

if (Number.EPSILON > 0 && Number.EPSILON < 1) {
  console.log(Number.EPSILON);
}

const num = 0.1 + 0.2 - 0.2;
console.log(num);

function isEqual(orginal, expected) {
  return Math.abs(orginal - expected) < Number.EPSILON;
}

console.log(isEqual(1, 1));
console.log(isEqual(2, 2));
console.log(isEqual(0.1, 0.1));
console.log(isEqual(num, 0.1));
