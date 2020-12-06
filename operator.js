//  string concatenation
console.log('my' + 'cat');
console.log('1' + 2);
console.log(`string literals: 1 + 2 = ${1 + 2}`);

console.log('jaeyun\'s book');

//  2 Numeric operators 

console.log(1 + 1);
console.log(1 - 1);
console.log(1 * 1);
console.log(1 / 1);
console.log(5 % 2); // 나누고 나머지값
console.log(2 ** 3); // 2의 3승


// 3. Increment and decrement operators 값을 증가시킴

let counter = 2;
const preIncrement = ++counter;
// counter = coutner + 1;
// PreIncrement = counter;
console.log(preIncrement); 

const postIncrement = counter++;
// postIncrement = counter;
// counter = counter + 1;
console.log(postIncrement);

// 4. Assignment 할당 

let x = 3;
let y = 6;
x += y; //  x = x + y ;
x -= y; //  x = x - y ;
x *= y; //  x = x * y ;
x /= y; //  x = x / y ;

// 5. 비교 

console.log (10 < 6);
console.log (10 <= 6);
console.log (10 > 6);
console.log (10 >= 6);

// 6. or(||) , and(&&) , not(!)

const value1 = false;
const value2 = 4 < 2;

// || 1개만 트루가 나오면 트루
// &&  3개다 모두 트루가 나와야 트루를 출력
console.log(`or: ${value1 || value2 || check()}`);

function check() {
  for (let i = 0; i < 10; i++) {
    console.log('어렵당');
  }
  return true;
}

// ! (not)
console.log(value1);

// 7. Equality
const stringfive = '5';
const numberfive = 5;

// loose Equality (들어있는 값은 똑같음)
console.log(stringfive == numberfive);
console.log(stringfive != numberfive);

// strict (숫자, 문자 타입을 신경씀) 더 많이 선호하는 방식
console.log(stringfive === numberfive);
console.log(stringfive !== numberfive);

// object  Equality 
const n1 = { name: 'nn'};
const n2 = { name: 'nn2'};
const n3 = n1;

console.log(n1 == n2);
console.log(n1 === n2);
console.log(n1 === n3);

// equality - puzzler 
console.log(0 == false);
console.log(0 === false);
console.log('' == false);
console.log('' === false);
console.log(null == undefined);
console.log(null === undefined);

// if, else if, else

const name = 'jaeyun';
if(name === 'jaeyun') {
  console.log('welcome');
}else if (name === 'who') {
  console.log('you');
}else {
  console.log('unkwnon');
}

//Ternary operator if(?) else(:)

console.log(name === 'jaeyun' ? 'hihi' : 'byebye');

// switch

const browser = 'ie';

switch (browser) {
  case 'ie':
    console.log('oh');
    break;
  case 'chrome':
    console.log('good');
    break; 
  case 'firefox':
  case 'cross':  
    console.log('soso');
    break;
    default:
    console.log('bye');  
}

// 11. Loops

let i = 3;
while (i > 0) {
  console.log(`while: ${i}`);
  i--;
}

do {
  console.log(`do while: ${i}`);
  i--;
} while (i > 0);

// for loop, for(begin; condition; step)

for (i = 3; i > 0; i--) {
  console.log(`for: ${i}`);
}

// inline-for
for (let i = 3; i > 0; i = i -2) {
  console.log(`inline-for: ${i}`);
}

// neseted loops
for (let i = 0; i < 10; i++) {
  for (let j = 0; j < 10; j++) {
    console.log(`i: ${i}, j:${j}`);
  }
}


