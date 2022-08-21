"uset strict";

function getBanana() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("바나나");
    }, 1000);
  });
}

function getApple() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("사과");
    }, 3000);
  });
}

function getOrange() {
  return Promise.reject(new Error("no orange"));
}

//바나나와 사과를 같이 가지고 오기

async function fetchFruits() {
  const banana = await getBanana();
  const apple = await getApple();
  return [banana, apple];
}

fetchFruits() //
  .then((fruits) => console.log(fruits));
