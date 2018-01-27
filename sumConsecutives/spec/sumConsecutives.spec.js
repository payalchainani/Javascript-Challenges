var path = require('path');
var expect = require('chai').expect;

var {sumConsecutives, reduceConsecutives} = require(path.join(__dirname, '..', './sumConsecutives.js'));

describe('sumConsecutives()', function () {
  'use strict';

  it('returns an array', function () {
    expect(sumConsecutives([1,2,3])).to.be.an('array');
    });

  it('returns an array correctly formatted', function () {
    expect(sumConsecutives([1,2,3])).to.eql([1,2,3]);
    expect(sumConsecutives([1,1,2,3])).to.eql([2,2,3]);
    expect(sumConsecutives([1,1,2,2,3,3])).to.eql([2,4,6]);
    expect(sumConsecutives([1,1,2,1,1,1,1,2,1,1,1])).to.eql([2,2,4,2,3]);
  });

});

describe('reduceConsecuative()', function () {
  'use strict';
  
  it('exists', function () {
    expect(reduceConsecutives).to.be.a('function');
  
  });
  it('returns an array with no repeats', function () {
  expect(reduceConsecutives([1,1,2,1,1,1,1,2,1,1,1])).to.eql([8,2,3]);
  
  });
  });
