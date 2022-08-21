"use strict";

//import * as counter from "./counter.js"; 모두 가져오기
import increase from "./counter.js";
import { decrease, getCount } from "./counter.js";
// import { decrease as decrease1 } from "./counter.js"; 이름 바꾸기
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

increase();
increase();
increase();
decrease();
const count = getCount();
console.log(`${count} 카운트값 `);
