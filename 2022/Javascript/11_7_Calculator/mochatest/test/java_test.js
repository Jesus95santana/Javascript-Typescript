const assert = require('chai').assert;

const java = require('../java');

describe('Calculator +', () => {
  it('Adds two numbers', () => {
    // Setup
    const num1 = 1;
    const num2 = 2;
    const expected = 3;

    // Excersize
    const result = num1 + num2;

    // Verification

    assert.equal(result, expected);
  });
});
