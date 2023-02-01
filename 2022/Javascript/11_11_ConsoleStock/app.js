// this is the frontend processing

const checkOut = require('./library.js');

// example of input from customer

const order = [['switch', 2], ['playstation', 76], ['xbox', 3]];

const handleResolve = (resolved) => {
  console.log(resolved);
};

const handleReject = (rejection) => {
  console.log(rejection);
};

checkOut(order).then(handleResolve, handleReject);
