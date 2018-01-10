var path = require('path');
var expect = require('chai').expect;

var {secondsToTimeString} = require(path.join(__dirname, '..', './secondsToTimeString.js'));

describe('secondsToTimeString()', function () {
  'use strict';

  it('return a string', function () {
    expect(secondsToTimeString()).to.be.a('string');
  });
    
  it('human readable string when passed 1', function () {
  expect(secondsToTimeString(1)).to.equal('1 second');
  });
  
  it('human readable string when passed 2', function () {
  expect(secondsToTimeString(2)).to.equal('2 seconds');
  });

});
