"use strict";

//접근제어자 - 캡슐화
// private(#), public(기본), protected
class Fruit {
  #name;
  #emoji;
  #type = "과일";
  // 생성자: new 키워드로 객체를 생성할때 호출되는 함수
  constructor(name, emoji) {
    this.#name = name;
    this.#emoji = emoji;
  }

  // 인스턴스 레벨의 메서드
  #display = () => {
    console.log(`${this.#name} : ${this.#emoji}`);
  };
}

// apple은 Fruit 클래스의 인스턴스 이다.
const apple = new Fruit("apple", "⭕");
// apple.#name = "오렌지"; //#field는 외부에서 접근이 불가능함

console.log(apple);
