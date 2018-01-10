var expect = require('chai').expect;
var {foldString} = require('../foldStrings');

describe('foldString', function () {
  it('returns a string', function () {
    expect(foldString("")).to.equal("");
  });
    
  it('returns a string of even length and has been turned inside out', function () {
    expect(foldString('javascript')).to.equal('savajtpirc');
    expect(foldString('code')).to.equal('oced');
  });

  it('returns a string of odd length and has been turned inside out', function () {
    expect(foldString('Northcoders')).to.equal('htroNcsredo');
    expect(foldString('payal')).to.equal('apyla');
  });
});
