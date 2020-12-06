'use strict';

//1. 오브젝트 상수 와 property

//오브젝트 = {key : value}; 
// 키= 접근할수있는 변수(property) : property가 가지고있는 값   
const obj1 = {}; //오브젝트 상수
const obj2 = new Object(); //object constructor

function print(person) {
  console.log(person.name);
  console.log(person.age);
}

const jaeyun = {name:'jaeyun', age:28};
print(jaeyun);

//동적 가급적 사용 x 유지보수 힘들어짐
jaeyun.hasjob = true;
console.log(jaeyun.hasjob);

delete jaeyun.hasjob;
console.log(jaeyun.hasjob);

//2. 계산된 property
// property는 항상 string 타입으로 받아와야함.
console.log(jaeyun.name);
console.log(jaeyun['name']);
jaeyun['hasjob'] = true;
console.log(jaeyun.hasjob);

function printValue(obj, key) {
  console.log(obj[key]);
}
printValue(jaeyun, 'name');
printValue(jaeyun, 'age');

//3. property value shorthand (키와 밸류가 동일하다면 생략 가능)

const person1 = {name:'bob', age:2};
const person2 = {name:'pop', age:3};
const person3 = {name:'tot', age:4};
const person4 = new Person('jaeyun', 28);
console.log(person4);

//4. constructor Function

function Person(name, age) {
  //this = {};
  this.name = name;
  this.age = age;
  //return this;
}

//5. in operator: property existence check (key in obj);
//해당하는 오브젝트안에 키가 있는지 없는지 확인하는법

console.log('name' in jaeyun);
console.log('job' in jaeyun);
console.log('age' in jaeyun);
console.log(jaeyun.random);

//6. for...in vs for..of
//for (key in obj)
console.clear();
for (const key in jaeyun) {
  console.log(key);
}

//for (value of iterable)

const array = [1, 2, 4, 5];
for (let i = 0; i < array.length ; i++) {
  console.log(array[i]);
} // 위식을 아래에 좀 더 간단히

const array2 = [1, 2, 4, 5];
for (const value of array2) {
  console.log(value);
}

//7. fun cloning

const user = {name:'jaeyun', age:'28'};
const user2 = user;
user2.name = 'coder';
console.log(user);

//old way [구방식]
const user3 = {};
for (const key in user) {
  user3[key] = user[key];
}
console.clear();
console.log(user3);

//신방식
const user4 = {};
Object.assign(user4, user);
console.log(user4);

const user5 = Object.assign({}, user);
console.log(user5);

//another example
const fruit1 = {color:'red'};
const fruit2 = {color:'blue', size:'big'};
const mixed = Object.assign({}, fruit1, fruit2); //뒤에서 값을 덮어 씌움
console.log(mixed.color);
console.log(mixed.size);


