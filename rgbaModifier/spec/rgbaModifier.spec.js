var path = require('path');
var expect = require('chai').expect;

var {rgbaModifier} = require(path.join(__dirname, '..', './rgbaModifier.js'));

describe('rgbaModifier()', function () {
  'use strict';

  it('returns the changes opacity value and percentages', function () {
    expect(rgbaModifier('rgba(100,100,100,0.6)', 50, 1)).to.equal('rgba(150,150,150,1)');
    expect(rgbaModifier('rgba(50,100,20,0.6)', 20, 0.4)).to.equal('rgba(60,120,24,0.4)');
    expect(rgbaModifier('rgba(44,70,180,0.9)', -30, 0.3)).to.equal('rgba(31,49,126,0.3)');
    expect(rgbaModifier('rgba(225,60,160,1)', 90, 0.7)).to.equal('rgba(225,114,225,0.7)');
    expect(rgbaModifier('rgba(50,78,12,0.8)', -100, 0.5)).to.equal('rgba(0,0,0,0.5)');
    
  });

});
