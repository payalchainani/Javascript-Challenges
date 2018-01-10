const expect = require('chai').expect;
const {herdTheBabies} = require('../herdTheBabies');

describe('herdTheBabies()', function () {
  it('return a string that is sorted alphabetically, with the parent letter coming before its children', function () {
    expect(herdTheBabies('aA')).to.equal('A,a');
    expect(herdTheBabies('aBA')).to.equal('A,a,B');
    expect(herdTheBabies("bbaBccAC")).to.equal("A,a,B,b,b,C,c,c");
  });

  it('checks for edge cases',function() {
    expect(herdTheBabies(0)).to.equal('');
    expect(herdTheBabies([])).to.equal('');
    expect(herdTheBabies({})).to.equal('');
    expect(herdTheBabies()).to.equal('');
    expect(herdTheBabies('')).to.equal('');

  });
});