const expect = require('chai').expect;
const path = require('path');
const {insertNewValue} = require(path.join(__dirname, '../insertNewValue'));

describe('insertNewValue', function () {
    it('returns an empty array if first argument is not an array', function () {
        expect(insertNewValue(undefined,1)).to.eql([]);
        expect(insertNewValue(123,1)).to.eql([]);
        expect(insertNewValue('hello',1)).to.eql([]);
        });
        it('returns 0 if second argument is not a number', function () {
        expect(insertNewValue([1,2,3],undefined)).to.equal(0);
        expect(insertNewValue([1,2,3],'abc')).to.equal(0);
        expect(insertNewValue([1,2,3],[1,2,3])).to.equal(0);
    });

    it('returns the sorted array with the num inserted in correct position', function () {
        let array = [1, 4, 5, 10];
        let expected = [1, 2, 4, 5, 10];
        expect(insertNewValue(array, 2)).to.eql(expected);
    });

    it('returns the sorted array with the num inserted in correct position', function () {
        let array = [101, 444, 679, 1939, 1988];
        let expected = [101, 444, 679, 1939, 1988, 2033];
        expect(insertNewValue(array, 2033)).to.eql(expected);
    });

});