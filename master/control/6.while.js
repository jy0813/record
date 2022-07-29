"use strict";

//while (조건) {}
//조건이 false가 될때까지 {} 코드를 반복 실행
let num = 5;
while (num >= 0) {
  console.log(num);
  num--;
}

let isActive = false;
let i = 0;

//조건이 맞을때만 실행
while (isActive) {
  console.log("아직 살아있다.");
  if (i === 1000) {
    break;
  }
  i++;
}

//일단 먼저 실행하고나서 조건을 검사함
do {
  console.log("do while");
} while (isActive);
