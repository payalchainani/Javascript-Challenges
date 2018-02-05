const expect = require('chai').expect;
const {foldArray} = require('../foldArray');

describe('foldArray', function () {

    it('should return an array', function () {
        expect(Array.isArray(foldArray())).to.equal(true);
    });
        
    it('should return a folded even array 1 time', function () {
        expect(foldArray([1, 2])).to.eql([3]);
    });

    it('should return a folded array 1 time', function () {
        expect(foldArray([1, 2, 3])).to.eql([4, 2]);
        expect(foldArray([1,2,3,4,5])).to.eql([6,6,3]);
        expect(foldArray([1, 2, 3, 10, 34, 100])).to.eql([101, 36, 13]);
    });

    it('should return a folded array n times', function () {
        expect(foldArray([1, 2, 3, 10, 34, 100], 2)).to.eql([114, 36]);
        expect(foldArray([1, 2, 3, 10, 34, 100], 3)).to.eql([150]);
        expect(foldArray([1, 2, 3, 10, 34, 100], 4)).to.eql([150]);
        expect(foldArray([1, 2, 3, 4, 5, 6, 7, 8, 9], 2)).to.eql([15, 20, 10]);
    });
});