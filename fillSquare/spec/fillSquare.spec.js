const {expect} = require('chai');
const {fillSquare} = require('../fillSquare');

describe('fillSquare', function () {

    it('works for simple squares', function () {
        expect(fillSquare([
            [1, 2, 3],
            [1, 2],
            [1]
        ])).to.eql([
            [1, 2, 3],
            [1, 2, null],
            [1, null, null]
        ]);
    });


    it('works for more complex squares', function () {
        const square = [
            [1, 2, 3],
            [1, 2, 3, 4, 5, 6],
            [1]
        ];
        const expected = [
            [1, 2, 3, null, null, null],
            [1, 2, 3, 4, 5, 6],
            [1, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null],
            [null, null, null, null, null, null]
        ]
        expect(fillSquare(square)).to.eql(expected);
    });
    
    // it('works for more complex squares', function () {
    //     const square = [
    //         [1, 2, 3],
    //         [1, 2, 3],
    //         [1],
    //         [],
    //         [1, 2, 3],
    //         [1]
    //     ];
    //     const expected = [
    //         [1, 2, 3], 
    //         [1, 2, 3], 
    //         [1, null, null]
    //       ]
    //     expect(fillSquare(square)).to.eql(expected);
    // });

});