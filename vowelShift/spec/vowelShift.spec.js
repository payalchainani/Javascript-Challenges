var path = require('path');
var expect = require('chai').expect;

var {vowelShift} = require(path.join(__dirname, '..', './vowelShift.js'));

describe('vowelShift()', function () {
  'use strict';

    it('returns vowels shifted n-times', () => {
    expect(vowelShift('foo', 0)).to.equal('foo');
    expect(vowelShift('hello', 1)).to.equal('holle');
    expect(vowelShift('hello child', 1)).to.equal('hille chold');
    expect(vowelShift('star nosed mole', 2)).to.equal('stor nesad mole');
    expect(vowelShift('funnily enough', 4)).to.equal('finnely onuugh');
  });

});
