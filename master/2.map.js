"use strict";

const map = new Map([
  ["key1", "사과"],
  ["key2", "바나나"],
]);

console.log(map);

//사이즈 확인
console.log(map.size);

//존재하는지 확인
console.log(map.has("key1"));

//순회
map.forEach((value, key) => console.log(key, value));

//찾기
console.log(map.get("key1"));

//추가
console.log(map.set("key3", "포도"));

//삭제
map.delete("key3");
console.log(map);

//전부삭제
map.clear();
console.log(map);

//오브젝트와의 큰 차이점
const key = { name: "milk", price: 10 };
const milk = { name: "milk", price: 10, description: "맛잇는우유" };
const obj = {
  [key]: milk,
};

console.log(obj);
const map2 = new Map([[key, milk]]);
console.log(map2);
console.log(obj[key]);
console.log(map2[key]);
console.log(map2.get(key));
