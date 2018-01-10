var path = require('path');
var expect = require('chai').expect;

var {rotateArray} = require(path.join(__dirname, '..', './rotateArray.js'));

describe('rotateArray()', function () {
  'use strict';

  it('returns the original array if no num is inputted', function () {
    expect(rotateArray([1,2,3])).to.eql([1,2,3]);
    expect(rotateArray([1,2,3], 0)).to.eql([1,2,3]);
  });

  it('if taking an array and a second argument of 1 will shift everything to the right', function () {
    expect(rotateArray([1,2,3], 1)).to.eql([3,1,2]);
  });

  it('returns the array rotated to the right if num is positive', function () {
    expect(rotateArray([1,2,3,4,5], 3)).to.eql([3,4,5,1,2]);
    expect(rotateArray([1,2,3,4,5], 4)).to.eql([2,3,4,5,1]);
  });

  it('returns the array rotated to the left if num is negative', function () {
    expect(rotateArray([1,2,3], -1)).to.eql([2,3,1]);
    expect(rotateArray([1,2,3,4,5], -3)).to.eql([4,5,1,2,3]);
    expect(rotateArray([1,2,3,4,5,5], -3)).to.eql([4,5,5,1,2,3]);
  });
});
