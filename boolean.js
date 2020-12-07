'use strict';
//숫자 0 , -0  , '', null, NAN, undifined: false 
//숫자 -1 , '들어있는 문자' , [비어있는 배열]: true

let num = 9; //undefined;

if(num) { 
  console.log('true!');
}

num && console.log(num); // && 앞에가 true여야 뒤에가 실행됨.(위와 동일식)

let obj = {
  name:'jaeyun',
}

if(obj) {
  console.log(obj.name);
}
obj && console.log(obj.name);