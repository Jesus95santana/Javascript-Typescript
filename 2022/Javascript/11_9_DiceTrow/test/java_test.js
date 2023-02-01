const assert = require('chai').assert;
const Game = require('../java');

describe('Game', () => {
  describe('dice()', () => {
    it('Generates above 0', () => {
      const atLeast = 0;
      const valueCheck = Game.dice();
      assert.isAtLeast(valueCheck, atLeast);
    });
    it('Generates numbers below 7', () => {
      const valueBelow = 6;
      const valueCheck = Game.dice();
      assert.isBelow(valueCheck, valueBelow);
    });
  });
  describe('Move()', () => {
    it('Recieves dice throw', () => {
      const expected = Game.dice();
      const call = Game.move(expected);
      assert.equal(call, expected);
    });
  });
});
