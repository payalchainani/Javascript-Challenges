var path = require('path');
var expect = require('chai').expect;

var {findMostRepeated} = require(path.join(__dirname, '..', './findMostRepeated.js'));

describe('findMostRepeated()', function () {
  'use strict';

  it('returns an object with empty array and null for repeated elements when given an empty array as input', () => {
    let expected = {elements: [], repeats: null};
    expect(findMostRepeated([])).to.eql(expected);
  });

  it('returns an object with empty array and null when given an array with no repeats', () => {
    let input = ['foo', 'bar', 'hello', 'world'];
    let expected = {elements: [], repeats: null};
    expect(findMostRepeated(input)).to.eql(expected);
  });

  it('returns an object with array of the most repeated element', () => {
    let input = ['foo', 'foo', 'bar', 'hello', 'world'];
    let expected = {elements: ['foo'], repeats: 2};
    expect(findMostRepeated(input)).to.eql(expected);
  });

  it('returns an object with array of most repeated elements', () => {
    let input = ['foo', 'foo', 1, 2, 3, 'bar', 2, 3, 4, 'bar', 'bar', 'foo'];
    let expected = {elements: ['foo', 'bar'], repeats: 3};
    expect(findMostRepeated(input)).to.eql(expected);
  });

});
