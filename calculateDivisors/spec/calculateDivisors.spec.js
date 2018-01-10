const path = require('path');
const {expect} = require('chai');
const {calculateDivisors} = require(path.join(__dirname, '..', './calculateDivisors.js'));

describe('calculateDivisors()', function () {
  it('returns a number', function () {
    expect(calculateDivisors(5)).to.be.a('number');
  });

  it('returns the sum of numbers that are divisible by three and five', function () {
    expect(calculateDivisors(1)).to.equal(0);
    expect(calculateDivisors(5)).to.equal(3);
    expect(calculateDivisors(6)).to.equal(8);
    expect(calculateDivisors(10)).to.equal(23);
    expect(calculateDivisors(13)).to.equal(45);
  });
});