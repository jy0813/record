'use strict';

// 함수 선언 
//function 원하는 함수이름 (인자를 정의)
function doSomething() {
  console.log('hello');
}

function add(a , b) {
  const sum = a + b;
  return sum; // 전달하는 키워드
}

// 함수 호출
doSomething();

const result = add(1, 2);
console.log(result);


// 함수 선언 
//function 원하는 함수이름 (인자를 정의)
function doSomething2(add2) {
  console.log(add2);
  const result2 = add2(4, 5);
  console.log(result2);
}

function add2(a , b) {
  const sum = a + b;
  return sum; // 전달하는 키워드
}

// 함수 호출
doSomething2(add2);

const addFun = add;
console.log(add);
console.log(addFun(1, 5));