var path = require('path');
var expect = require('chai').expect;

var {morseDecode} = require(path.join(__dirname, '..', './morseCode.js'));

describe('morseDecode()', function () {
  'use strict';

  it('exists', () => {
    expect(morseDecode).to.be.a('function');
    });
    it('returns a string', () => {
    expect(morseDecode()).to.be.a('string');
    expect(morseDecode([])).to.equal('');
    expect(morseDecode({})).to.equal('');
    });
    it('decodes one word', () => {
    expect(morseDecode('.... ..')).to.equal('HI');
    });
    it('decodes one word', () => {
    expect(morseDecode('.... . .-.. .-.. ---')).to.equal('HELLO');
    });
    it('decodes one word', () => {
    expect(morseDecode('-. --- .-. - .... -.-. --- -.. . .-. ...')).to.equal('NORTHCODERS');
    });
    it ('decodes a sentence', function () {
      expect(morseDecode('--. --- --- -..    -- --- .-. -. .. -. --.    -. --- .-. - .... -.-. --- -.. . .-. ...')).to.equal('GOOD MORNING NORTHCODERS');
    });
  
});
