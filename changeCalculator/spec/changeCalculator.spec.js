var expect = require('chai').expect;

var {changeCalculator} = require('../changeCalculator');

describe('changeCalculator()', function () {
  'use strict';

  it('returns the change for any number parameter', function () {
    expect(changeCalculator(2)).to.eql({'2':1});
    expect(changeCalculator(13)).to.eql({'1':1, '2':1, '10':1});
    expect(changeCalculator(65)).to.eql({'5':1, '10':1, '50':1});
    expect(changeCalculator(153)).to.eql({'1':1,'2':1,'50':1, '100':1});
    expect(changeCalculator(370 )).to.eql({'20':1,'50':1, '100':1, '200':1});
  });

});
