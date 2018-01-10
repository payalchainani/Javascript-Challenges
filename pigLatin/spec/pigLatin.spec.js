var path = require('path');
var expect = require('chai').expect;

var {pigLatin} = require(path.join(__dirname, '..', './pigLatin.js'));

describe('pigLatin()', function () {
  'use strict';

  it('returns a string if given an invalid arg', function () {
    expect(pigLatin( )).to.equal('')
    expect(pigLatin(1,2) ).to.equal('')
    expect(pigLatin([ ]) ).to.equal('')
    expect(pigLatin({ }) ).to.equal('')
  });

  it('returns a word with "way" appended if word begins with a vowel', function () {
    expect(pigLatin('a' )).to.equal('away')
    expect(pigLatin('apple' )).to.equal('appleway')
  });

  it('returns a word that has had the first consonant removed and added to the end of the word, along with "ay" if the word starts with a consonant', function () {
    expect(pigLatin('be' )).to.equal('ebay')
    expect(pigLatin('northcoders' )).to.equal('orthcodersnay')
  });

  it('returns a word that has had the first group of consonants removed and added to the end of the word, along with "ay" if the word starts with a consonant', function () {
    expect(pigLatin('the' )).to.equal('ethay')
    expect(pigLatin('sheffield' )).to.equal('effieldshay')
  });
  
  it('works for sentences of any length', () => {
    var actual = pigLatin('keep on coding');
    var expected = 'eepkay onway odingcay';
    expect(actual).to.equal(expected)
  });
});
