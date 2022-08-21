"use strict";

//자바스크립트는 기본적으로 동기적응로 실행됨

function a() {
  for (let i = 0; i < 100000; i++);
  return 1;
}

function b() {
  return a() + 1;
}

function c() {
  return b() + 1;
}

console.log("시작했다");
const result = c();
console.log(result);
