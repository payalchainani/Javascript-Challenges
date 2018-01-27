var path = require('path');
var expect = require('chai').expect;

var {palindrome} = require(path.join(__dirname, '..', './palindrome.js'));

describe('palindrome()', function () {
  'use strict';

  it('returns a boolean', function () {
    expect(palindrome()).to.be.a('boolean');
  });

  it('returns false if the string is not a palindrome', function () {
    expect(palindrome('cat')).to.equal(false);
    expect(palindrome('hello')).to.equal(false);
  });

  it('returns true if the string is a palindrome', function () {
    expect(palindrome('Acrobats stab orca')).to.equal(true);
    expect(palindrome('racecar')).to.equal(true);
    expect(palindrome('Are we not drawn onward to new era')).to.equal(true);
  });

});
