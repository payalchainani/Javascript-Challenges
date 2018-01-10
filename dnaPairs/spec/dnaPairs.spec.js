var path = require('path');
var expect = require('chai').expect;

var {dnaPairs} = require(path.join(__dirname, '..', './dnaPairs.js'));

describe('dnaPairs()', function () {
  'use strict';

  it('returns a nested array', function () {
    expect(dnaPairs("G")).to.eql([ ["G", "C"] ]);
  });
    
  it('returns matched base with each pair', function () {
    expect(dnaPairs("G")).to.eql([ ["G", "C"] ]);
    expect(dnaPairs("AG")).to.eql([ ["A", "T"], ["G", "C"] ])
    expect(dnaPairs("ATAG")).to.eql([ ["A", "T"], ["T", "A"], ["A", "T"], ["G", "C"] ])
  }); 
  
  it('checks for edge cases', function (){
    expect(dnaPairs('')).to.eql([]);
    expect(dnaPairs({})).to.eql([]);
    expect(dnaPairs(7)).to.eql([]);
    expect(dnaPairs(true)).to.eql([]);
    expect(dnaPairs()).to.eql([]);
    expect(dnaPairs([])).to.eql([]);
  });
});
