"use strict";

//문자열타입

let string = "hello world";
string = `안녕`;
console.log(string);
string = '"안녕!"';
console.log(string);

//특수 문자 출력

string = "안녕!\n하세요!";
console.log(string);
string = "안녕!\n하세요!\t\t 반가워용";
console.log(string);
string = "안녕!\n하세요!\t\t 반가워용\ua09ac";
console.log(string);

//템플릿 리터럴(template literal)

let id = "재윤";
let greeting = "안녕" + id + "🐖";
console.log(greeting);
greeting = `안녕${id}`;
console.log(greeting);
