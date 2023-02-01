chickenfaq = {};

chickenfaq.chickenCall = function () {
  return 'Buck-buck';
};

chickenfaq.eggCalc = (eggs) => {
  if (eggs % 12 === 0) {
    let nums = eggs / 12;
    console.log(`You have ${nums} dozen eggs!!`);
    return (nums);
  } else if (typeof eggs !== 'number') {
    throw new Error('NaNError');
  } else if (eggs < 0) {
    throw new Error('LessThan0');
  }
};

module.exports = chickenfaq;

console.log(chickenfaq.chickenCall());
console.log(chickenfaq.eggCalc(24));
