"use strict";

//Nullish Coalescing Operator
//ES11
//?? null, undefined
//|| falshy한 경우 설정 (할당) 0, -0, ''

let num = 0;
console.log(num || "-1");
console.log(num ?? "-1");
