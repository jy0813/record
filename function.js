// function은 오브젝트 이다. (여러번 재사용 가능) , 어떤값을 계산하기 위해 사용


//함수 선언문

function printHello() {
  console.log('holly');
}
printHello();

function log(message) {
  console.log(message);
}
log('hi hi');
log(1234);

// parameters 
// premitive : passed by value
// object prameters : passed by reference

function changeName(obj) {
  obj.name = 'coder';
}
const jaeyun = { name: 'jaeyun'};
changeName(jaeyun);
console.log(jaeyun);

// Default parameters 

function showmg(message, from = 'unknown') {
  console.log(`${message} by ${from}`);
}
showmg('hi');

// Rest parameters 배열 형태

function printall(...args) {
  for (let i = 0; i < args.length; i++) {
    console.log(args[i]);
  }

  for (const arg of args) {
    console.log(arg);
  }
  args.forEach((arg) => console.log(arg));
}
printall('coding', 'very', 'hard');

//5. Local scope 

let globalmsg = 'global world'; //global variable 전역변수
function printmsg() {
  let message = 'hello world';
  console.log(message); //local variable 지역변수
  console.log(globalmsg);
  function printmsg2() {
    console.log(message);
    let childmsg = 'hello';
  }
  //console.log(childmsg); //error

  return undefined; //생랴 가능
}
printmsg();

// 6. return a value

function sum(a, b) {
  return a + b;
}

const result = sum(1, 2);
console.log(`sum: ${sum(1, 2)}`);

// 7. Early return, early exit
// bad
function upgraderUser(user) {
  if (user.point > 10) {
    //long upgrade logic...
  } 
}

// good
function upgraderUser(user) {
  if (user.point <= 10) {
    return;
  }
  //long upgrade logic... 
}

//함수표현식
const print2 = function print2() { //// named function (네임드 펑션)

}
const print = function() { // anonymous function(익명함수)
  console.log('print');
};
print();
const printAgain = print;
printAgain();
const sumAgain = sum;
console.log(sumAgain(1, 3));

//2. callback

function randomQuiz(answer, printYes, printNo) {
  if(answer === 'love you') {
    printYes();
  }else {
    printNo();
  }
}

//anonymous function
const printYes = function () {
  console.log('me too');
};

// named function 
const printNo = function print() {
  console.log('holly shit');
};

randomQuiz('wrong', printYes, printNo);
randomQuiz('love you', printYes, printNo);

//arrow function
//always anonymous 항상 이름이 없음

// const simpleprint = function () {
//   console.log('simpleprint!');
// };

const simpleprint = () => console.log('simpleprint!');
simpleprint();
const add = (c, d) => c + d;
const simple = (c, d) => {
  return c * d;
};
console.log(simple(2, 3));

// IIFE (즉시 실행되는 함수)

(function hollyworld() {
  console.log('IIFE');
})();



function calculate(command, a, b) {
  if(command === 'hey work') {

  }
}
