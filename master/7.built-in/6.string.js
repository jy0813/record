"use strict";

const textObj = new String("Hello World!");
const text = "Hello World!";

console.log(textObj);
console.log(text);
console.log(text.length);
console.log(text[0]);
console.log(text[1]);
console.log(text[2]);
console.log(text.charAt(0));
console.log(text.charAt(1));
console.log(text.charAt(2));

console.log(text.indexOf("l"));
console.log(text.lastIndexOf("l"));

console.log(text.includes("tx"));
console.log(text.includes("h"));
console.log(text.includes("H"));

console.log(text.startsWith("h"));
console.log(text.startsWith("H"));

console.log(text.endsWith("1"));
console.log(text.endsWith("!"));

console.log(text.toLocaleUpperCase());
console.log(text.toLocaleLowerCase());

console.log(text.substring(0, 2)); // 2 이전까지,
console.log(text.slice(0, 2));
console.log(text.slice(2));
console.log(text.slice(-2));

const space = "             space";
console.log(space.trim());

const longText = "get to the point";
console.log(longText.split(" "));
console.log(longText.split(" ", 2));
