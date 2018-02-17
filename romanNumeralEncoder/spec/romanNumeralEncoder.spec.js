var path = require('path');
var expect = require('chai').expect;

var {romanNumeralEncoder} = require(path.join(__dirname, '..', './romanNumeralEncoder.js'));

describe('romanNumeralEncoder()', function () {
  'use strict';

  it('returns a string', function () {
    expect(romanNumeralEncoder(1)).to.be.a('string');
  });
    
  it('work for numbers 1-10', function () {
    expect(romanNumeralEncoder(1)).to.equal('I')
    expect(romanNumeralEncoder(2)).to.equal('II');
    expect(romanNumeralEncoder(3)).to.equal('III')
    expect(romanNumeralEncoder(4)).to.equal('IV')
    expect(romanNumeralEncoder(5)).to.equal('V');
    expect(romanNumeralEncoder(6)).to.equal('VI')
    expect(romanNumeralEncoder(7)).to.equal('VII')
    expect(romanNumeralEncoder(8)).to.equal('VIII')
    expect(romanNumeralEncoder(9)).to.equal('IX')
    expect(romanNumeralEncoder(10)).to.equal('X')
  });

  it('work for numbers 11-100', function () {
    expect(romanNumeralEncoder(11)).to.equal('XI')
    expect(romanNumeralEncoder(17)).to.equal('XVII')
    expect(romanNumeralEncoder(20)).to.equal('XX');
    expect(romanNumeralEncoder(45)).to.equal('XLV')
    expect(romanNumeralEncoder(58)).to.equal('LVIII');
    expect(romanNumeralEncoder(60)).to.equal('LX')
    expect(romanNumeralEncoder(75)).to.equal('LXXV')
    expect(romanNumeralEncoder(81)).to.equal('LXXXI')
    expect(romanNumeralEncoder(91)).to.equal('XCI')
    expect(romanNumeralEncoder(100)).to.equal('C')
  });

});
