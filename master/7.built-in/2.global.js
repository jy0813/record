"use strict";

console.log(globalThis);
console.log(this);
console.log(Infinity);
console.log(NaN);
console.log(undefined);

eval("const num = 2; console.log(num)");
console.log(isFinite(1));
console.log(isFinite(Infinity));

console.log(parseFloat("12.43")); // 문자열이여도 소수점이 있으면 숫자로 변환
console.log(parseInt("12,43")); // 문자열이여도 소수점이 있으면 숫자로 변환 - 실수를 정수로

//URL (URI, Uniform Resource Identifier 하위개념)
//아스키 문자로만 구성되어야 한다.
//한글이나 특수문자는 이스케이프 처리 해야 한다.
const URL = "https://네이버.com";
const encoded = encodeURI(URL);
console.log(encoded);

const decoded = decodeURI(encoded);
console.log(decoded);

// 전체 URL이 아니라 부분적인 것은 Component 이용
const part = "네이버.com";
encodeURIComponent(part);
console.log(encodeURIComponent(part));
