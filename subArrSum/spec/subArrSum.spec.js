var expect = require('chai').expect;
var {subArrSum} = require('../subArrSum');

describe('subArrSum', function () {

    it('returns the sum of the whole array, when the list is made up of only positive numbers', () => {
        let arr = [1,2,30,10];
        let expected = 43;
        expect(subArrSum(arr)).to.equal(expected);
    });

    it('returns 0, when the list is made up of only negative numbers', () => {
        let arr = [-1,-3,-2,-10];
        let expected = 0;
        expect(subArrSum(arr)).to.equal(expected);
        });

    it('returns the maximum number from array with a mix of negative & positive numbers', () => {
        expect(subArrSum([-2, 1, -3, 4, -1, 2, 1, -5, 4])).to.equal(6);
        expect(subArrSum([9, 8, 7, -3, 6, 5, 4, -3, 2, 1])).to.equal(36);
        expect(subArrSum([5, -6, 2, 9, -4, -3, 8, -10, 20])).to.equal(22);
    });

});
