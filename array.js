'use strict';

//array 배열

//1. 배열의 선언

const arr1 = new Array();
const arr2 = [1, 2];

//2. index position 배열의 접근

const fruits = ['🍎', '🍌'];
console.log(fruits);
console.log(fruits.length);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[fruits.length -1]); //인덱스는 0부터 시작히기때문에

//3. looping over an array
//a.for loop
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
//b for of
for (let fruit of fruits) {
  console.log(fruit);
}
//c. forEach //콜백 함수를 받아옴
fruits.forEach((fruit, index,) => {
  console.log(fruit, index);
});

//4. 추가 지우기 복사
//push : add an item to the end 뒤에다 추가
fruits.push('🍓','🥝')
console.log(fruits);
//pop : remove an item from the end 뒤에서 지움
fruits.pop();
console.log(fruits);

//unshift : add an item to the benigging 앞에서 추가
fruits.unshift('🍋','🍍');
console.log(fruits);
//shift : remove an item from the benigging 앞에서 지움
fruits.shift();
console.log(fruits);

//shift , unshift는 pop, push보다 느림
//뒤에서부터 빈공간에 넣기 때문에 뒤에서 추가하고 지우는게 빠름
//잎에서부터 추가하고 지우면 위치가 이동되어 느림

//splice : remove an item by index position : 지정된 인덱스를 지우기

fruits.push('🍇','🍒');
console.log(fruits);
fruits.splice(4, 2); //시작하는 인덱스포함 , 지울 개수
console.log(fruits);
fruits.splice(2); //시작하는 인덱스부터 모두 지움
console.log(fruits);
fruits.splice(1,1, '🍈','🍉'); //시작하는 인덱스부터 지운 후 뒤에 추가가능
console.log(fruits);

//concat : combine two arrays 2가지의 배열을 묶어서 만들수있음

const fruits2 = ['🍑','🍅'];
const newFruits = fruits.concat(fruits2);
console.log(newFruits);

//5. Searching
//find the index 인덱스 검색
console.clear();
console.log(newFruits);

//indexof
console.log(newFruits.indexOf('🍉'));
console.log(newFruits.indexOf('🍑'));
console.log(newFruits.indexOf('🍇')); //배열에 없는값을 출력하면 -1로 출력
//includes
console.log(newFruits.includes('🍑')); //배열에 있는지 없는지 true false로 출력

//lastIndexOf
console.clear();
newFruits.push('🍍')
console.log(newFruits);
console.log(newFruits.indexOf('🍍')); //indexof는 제일 첫번째 인덱스를 리턴함.
console.log(newFruits.lastIndexOf('🍍')); // 마지막 인덱스를 리턴함.