// "use strict";

//동결 Object.freeze 추가 ❌ 삭제 ❌ 쓰기 ❌ 속성 재정의 ❌
// (단, 얕은 꽁꽁 얼림!) => 참조하는 객체까지는 얼리지 않음

const owner = { name: "주인" };
const dog = { name: "와우", owner: owner };
Object.freeze(dog);
dog.name = "멍멍";
console.log(dog);
dog.age = 4;
console.log(dog);
delete dog.name;
console.log(dog);
owner.name = "하이";
console.log(dog);

// 밀봉 Object.seal 값의 수정 ⭕ 추가 ❌ 삭제 ❌ 속성 재정의 ❌

const cat = {}; // === {...dog};
Object.assign(cat, dog);
Object.seal(cat);
console.log(cat);
cat.name = "냐옹";
console.log(cat);
delete cat.owner;
console.log(cat);

console.log(Object.isFrozen(dog));
console.log(Object.isSealed(cat));

//확장 금지 preventExtensions 추가 ❌

const tiger = { name: "어흥" };
Object.preventExtensions(tiger);
console.log(Object.isExtensible(tiger));
tiger.name = "어흐응";
console.log(tiger);
delete tiger.name;
console.log(tiger);
tiger.age = 1;
console.log(tiger);
