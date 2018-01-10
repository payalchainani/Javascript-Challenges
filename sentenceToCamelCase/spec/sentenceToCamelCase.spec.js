var path = require('path');
var expect = require('chai').expect;

var {sentenceToCamelCase} = require(path.join(__dirname, '..', './sentenceToCamelCase.js'));

describe('sentenceToCamelCase()', function () {
  'use strict';

  it('returns upper camel case if bool is true', function () {
    expect(sentenceToCamelCase("this sentence", true)).to.equal('ThisSentence');
    expect(sentenceToCamelCase("This Bigger strange Sentence", true)).to.equal('ThisBiggerStrangeSentence');
  });

  it('returns lower camel case if bool is false', function () {
    expect(sentenceToCamelCase("this sentence", false)).to.equal('thisSentence');
  });

  it('returns a string in non camel case, if bool is undefined', function () {
    expect(sentenceToCamelCase("thisBiggerStrangeSentence")).to.equal('This bigger strange sentence.');
  });

  // Add more assertions here
});
