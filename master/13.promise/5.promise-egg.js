"use strict";

function fetchPig(pig) {
  return Promise.resolve(`${pig} => 🐖💨`);
}

function firePig(pig) {
  return Promise.resolve(`${pig} => 🍖`);
}
function getPig() {
  return Promise.reject(new Error("돼지를 가지고 올 수 없음"));
  // return Promise.resolve(`🌴 => 🐖`);
}

getPig()
  .catch((error) => {
    console.log(error.name);
    return "🐖";
  })
  .then((pig) => fetchPig(pig))
  .then((pig) => firePig(pig))
  .then((firePig) => console.log(firePig));
