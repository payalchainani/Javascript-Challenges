var path = require('path');
var expect = require('chai').expect;

var {tillAddition} = require(path.join(__dirname, '..', './tillAddition.js'));

describe('tillAddition()', function () {
  'use strict';

  it('returns a string', function () {
    expect(tillAddition({'5p': 1,'10p': 1,'20p': 1,'50p': 1,'£1': 1})).to.be.a.string;
  });

  it('returns a string with the summed value for any object', function () {
    expect(tillAddition({'5p': 1,'10p': 1,'20p': 1,'50p': 1,'£1': 1})).to.eql("£1.85");
    expect(tillAddition({'1p': 1,'2p': 1})).to.eql('£0.03')
    expect(tillAddition({'1p': 1,'2p': 1,'5p': 1,'10p': 1,'20': 1})).to.eql('£0.38')
  });
});
