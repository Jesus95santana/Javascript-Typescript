const assert = require('assert');
const chickenfaq = require('../../java.js');

describe('CHICKEN FACTORY', () => {
  describe('CHICKEN TESTS', () => {
    it('Returns chicken call Buck-buck', () => {
      // Setup
      const expected = 'Buck-buck';

      // Excersize
      const call = chickenfaq.chickenCall();

      // Verify
      assert.equal(call, expected);
    });
    it('Converts 12 eggs into 1 dozen', () => {
      // Setup
      const expected = 1;

      // Excersize
      const call = chickenfaq.eggCalc(12);

      // Verify
      assert.equal(call, expected);
    });
    it('Throws error if not a number', () => {
      // Setup
      const input = '3';
      const expected = Error;

      // Excersize

      // Verify
      // assert.equal(call, expected);

      assert.throws(() => {
        chickenfaq.eggCalc(input);
      }, expected);
    });
    it('Throws error if number is less than 0', () => {
      // Setup
      const input = -1;
      const expected = Error;

      // Excersize
      // const call = chickenCall(input);
      // Verification
      assert.throws(() => {
        chickenfaq.eggCalc(input);
      }, expected);
    });

  });
});
