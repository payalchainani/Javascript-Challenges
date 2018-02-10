var path = require('path');
var expect = require('chai').expect;

var {findClosingParenthesis} = require(path.join(__dirname, '..', './findClosingParenthesis.js'));

describe('findClosingParenthesis()', function () {
  'use strict';

  it('returns a number', function () {
    expect(findClosingParenthesis()).to.be.a('number');
    });
    
  it('returns -1 for no string', function () {
    expect(findClosingParenthesis('')).to.equal(-1);
  });
    
  it('returns -1 for no brackets', function () {
    expect(findClosingParenthesis('hello')).to.equal(-1);
  });
    
  it('works for no second arguement', function () {
    expect(findClosingParenthesis('(hello)')).to.equal(6);
    expect(findClosingParenthesis('Hello, (world). (Something Else).')).to.equal(13);
  });

  it('works when a second arguement is passed', function () {
    expect(findClosingParenthesis('(hell)o',1)).to.equal(5);
    expect(findClosingParenthesis('Hello, (world). (Something Else).',2)).to.equal(31)
    expect(findClosingParenthesis('Hello, (world, (foo) bar (something) else), foo (bar) cat',3)).to.equal(35)
  });
  
});
