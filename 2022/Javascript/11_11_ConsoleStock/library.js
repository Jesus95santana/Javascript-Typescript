// this is the backend processing

// game console inventory
const inventory = {
  xbox: 300,
  playstation: 75,
  switch: 200,
};

// function that allows order to be processed

const checkOut = function (order) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let subtrue = order.every(item => inventory[item[0]] >= item[1]);
      if (subtrue) {
        resolve('Order processed!');
      } else {
        reject('nah bruh, we dont have enough');
      }
    }, 2000);
  });
};

module.exports = checkOut;
