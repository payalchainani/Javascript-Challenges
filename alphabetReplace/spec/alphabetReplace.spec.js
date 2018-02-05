const { expect } = require('chai');
const {alphabetReplace} = require('../alphabetReplace');

describe('alphabetReplae', function () {
    it('returns original input if the input is not a string', () => {
        expect(alphabetReplace(123)).to.equal(123);
        expect(alphabetReplace([])).to.eql([]);
        expect(alphabetReplace({})).to.eql({});
    });

    it('only allows alphabetical characters in the string as input', function () {
        expect(alphabetReplace('!@#$%^?><\/.,&*()')).to.equal(undefined);
    });

    it('returns the correpsonding index number in the alphabet', function () {
        expect(alphabetReplace('code')).to.equal('3 15 4 5');
        expect(alphabetReplace('Northcoders')).to.equal('14 15 18 20 8 3 15 4 5 18 19');
        expect(alphabetReplace('expert programming')).to.equal('5 24 16 5 18 20 16 18 15 7 18 1 13 13 9 14 7');
        expect(alphabetReplace('abcdefghijklmnopqrstuvwxyz')).to.equal('1 2 3 4 5 6 7 8 9 10 11 12 13 14 15 16 17 18 19 20 21 22 23 24 25 26');
        expect(alphabetReplace('e x p e r t p r o g r a m m i n g')).to.equal('5 24 16 5 18 20 16 18 15 7 18 1 13 13 9 14 7');
    });
});
