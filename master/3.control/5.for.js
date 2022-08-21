"use strict";

// 반복문 Loop Statement
// for (변수선언문; 조건식; 증감식) {}
//실행순서 :
//1. 변수선언문
//2. 조건식의 값이 참이면 {} 코드블럭을 수행
//3 증감식을 수행
//4. 조건식이 거짓이 될때까지 2번과 3번을 반복함

for (let i = 0; i < 5; i++) {
  console.log(i);
}

console.clear();

for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    console.log(i, j);
  }
}

//무한루프 💩

// for (;;) {
//   console.log("출력");
// }

// 반복문 제어 : continue, break;

for (let i = 0; i < 20; i++) {
  if (i === 10) {
    continue; // 조건이 맞으면 그 다음으로 넘어감
    console.log("i가 드디어 10이 되었다.");
    break; // 조건이 맞으면 반복문을 그만
  }
  console.log(i);
}
