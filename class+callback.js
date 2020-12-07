'use strict';

class Counter { 
  constructor(runEveryFiveTimes) {
    this.counter = 0;
    this.callback = runEveryFiveTimes;
  }

  increase() { //증가하는 함수
    this.counter++;
    console.log(this.counter);
    if(this.counter % 5 === 0) {//5로 나눴을때 나머지값이 없다면
      if(this.callback) {
        this.callback(this.counter);
      }
    }
}
}
function printSomething(num) {
  console.log(`'holly' ${num}`);
}
function alertNum(num) {
  alert(`'Wow' ${num}`);
}

const printCounter = new Counter(printSomething);
const alertCounter = new Counter(alertNum);

printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();
printCounter.increase();