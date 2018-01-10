const expect = require('chai').expect;
const {counterSpy} = require('../counterSpy');

describe('counterSpy()', function () {
    it('is a function', function () {
        expect(counterSpy).to.be.a('function');
        });
        it('return an array', function () {
        expect(counterSpy()).to.eql([]);
        });
        
        it('return an array with the specific strings removed', function () {
        expect(counterSpy(['Daryl'])).to.eql([]);
        expect(counterSpy(['Daryl','Harriet','James'])).to.eql(['Harriet']);
        expect(counterSpy(['Sam','Daryl','Chris','Harriet','Mauro'])).to.eql(['Harriet','Mauro']);
        });
});