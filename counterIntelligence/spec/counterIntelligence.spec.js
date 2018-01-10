const expect = require('chai').expect;
const {counterIntelligence} = require('../counterIntelligence');

describe('counterIntelligence()', function () {
    it('is a function', function () {
        expect(counterIntelligence).to.be.a('function');
      });
    
      it('returns a capitalized string', function () {
        expect(counterIntelligence('Y')).to.equal('X');
        });
        
        it('returns a capitalized string correcly shifted', function () {
        expect(counterIntelligence('BCD Y')).to.equal('ABC X');
        expect(counterIntelligence('NKRRU YCKKZNKGXZ D')).to.equal('HELLO SWEETHEART X');
        expect(counterIntelligence('ANVNVKNA CX YRLT DY IDLLQRWR XW HXDA FJH QXVN OAXV FXAT, MJAURWP G')).to.equal('REMEMBER TO PICK UP ZUCCHINI ON YOUR WAY HOME FROM WORK, DARLING X');
        expect(counterIntelligence('ngbk g toik jge :) d')).to.equal('HAVE A NICE DAY :) X');
        });

});