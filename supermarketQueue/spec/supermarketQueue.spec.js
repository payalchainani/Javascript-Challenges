const expect = require('chai').expect;
const {queueTime} = require('../supermarketQueue');

describe('queueTime()', function () {

    it('returns a number', function () {
        expect(queueTime([1],1)).to.equal(1);
    });

    it('works for 1 till', function () {
        expect(queueTime([2,2,2],1)).to.equal(6);
    });
    
    it('works for multiple tills', function () {
        expect(queueTime([2,10],2)).to.equal(10);
        expect(queueTime([2,2,2],2)).to.equal(4);
        expect(queueTime([2,3,10],2)).to.equal(12);
        expect(queueTime([2,2,10],3)).to.equal(10);
    });

});