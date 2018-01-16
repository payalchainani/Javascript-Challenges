var path = require('path');
var expect = require('chai').expect;

var {findMissingLetter} = require(path.join(__dirname, '..', 'findMissingLetter.js'));

describe('findMissingLetter()', function () {
  'use strict';

  it('exists', function () {
    expect(findMissingLetter).to.be.a('function');
    });
    it('returns an empty string if no letter is missing ', function () {
    expect(findMissingLetter(['a', 'b', 'c', 'd', 'e'])).to.equal('');
    });
    it('returns the letter that is missing in an array of ordered letters', function () {
    expect(findMissingLetter(['a', 'b', 'c', 'e'])).to.equal('d');
    });
    
    it('returns the letter that is missing in an array of ordered UPPERCASE letters', function () {
    expect(findMissingLetter(['E', 'F', 'G', 'I'])).to.equal('H');
    });
  
});
