const inventory = {
  sunglasses: 1900,
  pants: 1088,
  bags: 1344,
};

const myExecutor = function (resolve, reject) {
  let glasses = inventory.sunglasses;

  if (glasses > 0) {
    resolve("Sunglasses are orderd");
  } else {
    reject("that item is sold out");
  }
};

const orderSunglasses = function() {
  return new Promise(myExecutor);
}

const orderPromise = orderSunglasses();

console.log(orderPromise)
