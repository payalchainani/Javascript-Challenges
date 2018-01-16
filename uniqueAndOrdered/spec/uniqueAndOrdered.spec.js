var expect = require('chai').expect;
var {uniqueAndOrdered} = require('../uniqueAndOrdered');

describe('uniqueAndOrdered', function () {
    it('is a function', function () {
        expect(uniqueAndOrdered).to.be.a('function');
        });
        it('can remove consecuative repeats from an array', function () {
        expect(uniqueAndOrdered([1, 1, 1, 1, 1, 2, 2, 2, 3, 3, 1, 1])).to.eql([1, 2, 3, 1]);
        });
        
        it('can remove consecuative repeats from a string', function () {
        expect(uniqueAndOrdered('AaAAABBBCCCc')).to.eql(['A', 'a', 'A', 'B', 'C', 'c']);
        expect(uniqueAndOrdered('nnoorrtthhccooddeerrss')).to.eql(['n', 'o', 'r', 't', 'h', 'c', 'o', 'd', 'e', 'r', 's'])
        });

});
