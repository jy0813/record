'use strict';

// 2. Variable (변수) 변경될수있는 값 rw(read /write)
// let (added in ES6)

let globalName = 'global name';
{
let name = 'jaeyun';
console.log(name);
name = 'hello'
console.log('hello')
console.log(globalName);
}
console.log(name);
console.log(globalName);

// var (don't ever use this !) 값을 선언하기전에 쓸수있음
// var hoisting 어디에 선언했냐에 상관없이 선언을 끌어 올려줌
// var는 블럭 스코프가 없음 {} 
console.log(age);
age = 4;
console.log(age);
var age;

// 3. Constant r (read only);
// 한번 할당하면 값이 절대 바뀌지 않음
// 보안상, 실수방지 

const daysInwWeek = 7;
const maxNumber = 5;

// 4. Variable types
//primitive 타입 : 한가지의 아이템 number , string, boolean , null, undifiedn, symbol 
// object 타입 : 싱글 아이템들을 하나로 묶어서 한 박스로 묶어 관리 
//function, first-class function

const infinity = 1 / 0; //무한대의 숫자
const negativeinfinity = -1 / 0;
const nAn = 'not a number' / 2; //숫자가 아닌값

console.log(infinity);
console.log(negativeinfinity);
console.log(nAn);

//bigInt 숫자에n을 붙여서씀

const bigInt = 1234123857189571853197583915n;
console.log(bigInt);

//string 글자

const a = '에이'
const b = '비'
const c =  a + b;

console.log(c);

//boolean 참과 거짓 
//false: 0, null , undefined, NaN, ''
//true: any other value

// null 비어잆는 값 empty

// undefined 선언은 되었지만 아무것도 값이 지정되있지 않음

//symbol , 맵이나 다른 자료에서 고유한 식별자가 필요하거나 우선순위를 주고 싶을때

//object, 일상생활에서보는 물건과 물체를 대표할수있는 박스 형태
const jaeyun = { name: 'jaeyun', age: 28};
jaeyun.age = 29; // 이런식으로 변경 가능
console.log(jaeyun);

// 5. Dynamic typing : 선언 할때 어떤 타입인지 선언하지않고 할당된 값에 따라 타입이 변경될수있음 

let text = 'hello';
console.log(text.charAt(0)); // index = 0 부터 시작
console.log(`value: ${text}, type: ${typeof text}`);
text = 1;
console.log(`value: ${text}, type: ${typeof text}`);
text = '7' + 5;
console.log(`value: ${text}, type: ${typeof text}`);
text = '8' / '2';
console.log(`value: ${text}, type: ${typeof text}`);