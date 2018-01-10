const expect = require('chai').expect;
const {validTriangles} = require('../validTriangles');

describe('validTriangles', function () {

    it('is a function', function () {
        expect(validTriangles).to.be.a('function');
    });

    it('returns a number', function () {
        expect(validTriangles([])).to.be.a('number');
      });

      it('returns 0 for an invalid triangle', function () {
        expect(validTriangles([[5, 10, 25]])).to.equal(0);
      });

      it('returns 1 for a valid triangle', function () {
        expect(validTriangles([[5, 4, 5]])).to.equal(1);
      });

      it('works on an array of arrays', function () {
        expect(validTriangles([[5, 4, 5]])).to.equal(1)
        expect(validTriangles([[5, 10, 25]])).to.equal(0);
        expect(validTriangles([[5, 10, 25], [5, 4, 5]])).to.equal(1)
        expect(validTriangles([[5, 4, 5], [5, 4, 5]])).to.equal(2);
        });


});