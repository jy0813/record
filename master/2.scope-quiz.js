"use strict";

{
  const x = 1;
  {
    const y = 2;
    console.log(x);
  }
  console.log(x);
  // console.log(y); 참조할 수 없음.
}

const text = "glboal"; //전역변수, 전역 스코프 (글로벌 변수, 글로벌 스코프)
{
  const text = "inside block1"; //지역변수(로컬 변수) 지역 스코프(로컬 스코프)
  {
    console.log(text);
  }
}
