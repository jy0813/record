"use strict";

function add(a, b) {
  return a + b;
}

const sum = add;

sum(1, 2);

add(1, 2);

console.log(sum(1, 2));
console.log(add(1, 2));
