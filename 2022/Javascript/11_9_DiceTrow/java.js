const Game = {};

Game.dice = function () {
  return Math.floor(Math.random() * 7);
};

Game.move = (dice) => {
  if (dice === 1) {
    console.log('you move 1 space');
    return dice;
  } else if (dice === 2) {
    console.log('you move 2 spaces');
    return dice;
  } else if (dice === 3) {
    console.log('you move 3 spaces');
    return dice;
  } else if (dice === 4) {
    console.log('you move 4 spaces');
    return dice;
  } else if (dice === 5) {
    console.log('you move 5 spaces');
    return dice;
  } else if (dice === 6) {
    console.log('you move 6 spaces');
    return dice;
  }
};

module.exports = Game;
