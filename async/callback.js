'use strict';

//자바스크립트는 동기적이다.

console.log(1);
setTimeout(() => console.log(2),1000);
console.log(3);

//동기적인 콜백
function print1(print) {
  print();
}
print1(()=> console.log('hello'));

//비동기적인 콜백

function print2(print, timeout) {
  setTimeout(print, timeout);
}
print2(()=> console.log('async callback'),2000);

// callback example

class UserStorage {
  loginUser(id, password, onSuccess, onError) {
    setTimeout(()=> {
      if(
        (id === 'jaeyun' && password === 'dream') ||
        (id === 'coder' && password === 'academy')
      ) {
        onSuccess(id);
      }else {
        onError(new Error('Not Found'));
      }
    }, 2000);
  }

  getRoles(user, onSuccess, onError) {
    setTimeout(()=> {
      if(user === 'jaeyun' ) {
        onSuccess({name: 'jaeyun', role: 'admin'});
      }else {
        onError(new Error('No access'));
      }
    }, 1000);
  }
}

const userStorage = new UserStorage();
const id = prompt('ID를 입력해주세요.');
const password = prompt('패스워드를 입력해주세요.');
userStorage.loginUser(
  id,
  password,
  (user) => {
    userStorage.getRoles(
      user,
       (userWithRole) => {
        alert(`Hello ${userWithRole.name}, you have a${userWithRole.role} role`);
    }, (error) => {
      console.log(error);
    })
},
  (error) => {
  console.log(error);
}
);

