"use strict";

//함수 선언문 function name() {}
//함수 표현식 const name = function () {}
//함수의 이름이 없는것은 무명의 함수라함

let add = function (a, b) {
  return a + b;
};

console.log(add(1, 2));

// 화살표 함수 const name = () => {}
add = (a, b) => a + b;

console.log(add(1, 2));

//생성자 함수 const object = new Function();

//IIFE(Immedicately-Invoked Fucntion Expressions) 즉시실행 함수
(function run() {
  console.log("🤣");
})();
