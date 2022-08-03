"use strict";

//정직원과 파트타임직원을 나타탤 수 있는 클래스를 만들어 보자
// 직원들의 정보: 이름, 부서이름, 한달 근무 시간
//매달 직원들의 정보를 이용해서 한달 월급을 계산할 수 있다
//정직원은 시간당 10000원
//파티타임 직원은 시간당 8000원

class Employee {
  constructor(name, part, time) {
    this.name = name;
    this.part = part;
    if (isNaN(time) || time < 0) {
      this.time = console.log("숫자를 입력해주세요.");
    } else {
      this.time = time;
    }
    if (part === "정직원") {
      this.hourWage = 10000;
    } else if (part === "파트타임") {
      this.hourWage = 8000;
    } else {
      console.log("부서이름을 정확히 입력해주세요.");
    }
  }

  getMoney() {
    return this.time * this.hourWage;
  }
}

class PartEmployee extends Employee {
  constructor(name, part, time) {
    super(name, part, time);
  }
}

const timeEmployee = new PartEmployee("밥", "정직원", "209");

console.log(timeEmployee.getMoney());
console.log(timeEmployee);

//답안

class EmployeeInfo {
  constructor(name, department, hoursPerMonth, payRate) {
    this.name = name;
    this.department = department;
    this.hoursPerMonth = hoursPerMonth;
    this.payRate = payRate;
  }

  calculatePay() {
    return this.hoursPerMonth * this.payRate;
  }
}

class FullTimeEmployee extends EmployeeInfo {
  static #PAY_LATE = 10000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, FullTimeEmployee.#PAY_LATE);
  }
}

class PartTimeEmployee extends EmployeeInfo {
  static #PAY_LATE = 8000;
  constructor(name, department, hoursPerMonth) {
    super(name, department, hoursPerMonth, PartTimeEmployee.#PAY_LATE);
  }
}

const jon = new FullTimeEmployee("존", "s/w", 30);
const bob = new PartTimeEmployee("밥", "s/w", 20);
console.log(jon.calculatePay());
console.log(bob.calculatePay());
