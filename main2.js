'user strict';

//primitive 타입 [number, string, boolean, null, undefined]
let number = 3;
let number2 = number;

console.log(number);
console.log(number2);

number2 = 4;
console.log('-----------');
console.log(number);
console.log(number2);

//object 상수변수 사용하기

let obj = {
  name: 'jaeyun',
  age: '28',
};
console.log(obj.name);

let obj2 = obj;
console.log(obj2.name);

obj.name = 'james';

console.log('-----------');
console.log(obj.name);
console.log(obj2.name);

let a = 2; //선언후 변경 가능
a = 5;
a = 9;

const b = 2; //한번 선언시 변경 불가

const obj3 = {
  name: 'jaeyun3',
  age: 8,
};

obj3.name = 'go'; // 레퍼런스가 가리키고있는 이름을 바꿀순 있음.


// obj3 = { <-- 레퍼런스 자체를 변경은 불가
//   name: 'go'
//   age: 5,
// }