var path = require('path');
var expect = require('chai').expect;

var {textInDiv} = require(path.join(__dirname, '..', './textInDiv.js'));


describe('textInDiv()', function () {
  'use strict';

  it('returns INVALID INPUT if given width is less than 15', function () {
    expect(textInDiv('A', 1)).to.equal('INVALID INPUT');
  });

  it('returns the string if given string is less than or equal to width', function () {
    expect(textInDiv('Northcoders', 15)).to.equal('Northcoders');

    expect(textInDiv('Northcoders Coding Bootcamp', 30)).to.equal('Northcoders Coding Bootcamp');
  });

  it('returns the string on new lines depending on the width chosen', function () {
    expect(textInDiv('Northcoders Coding Bootcamp', 20)).to.equal('Northcoders Coding\nBootcamp');
  });

  it('returns the string on new lines depending on the width chosen', function () {

    let str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec consectetur risus. Cras vel urna a tellus dapibus consequat. Duis bibendum tincidunt viverra. Phasellus dictum efficitur sem quis porttitor. Mauris luctus auctor diam id ultrices. Praesent laoreet in enim ut placerat. Praesent a facilisis turpis.';

    let width = 50;

    let expected = 'Lorem ipsum dolor sit amet, consectetur adipiscing\nelit. Aliquam nec consectetur risus. Cras vel urna\na tellus dapibus consequat. Duis bibendum\ntincidunt viverra. Phasellus dictum efficitur sem\nquis porttitor. Mauris luctus auctor diam id\nultrices. Praesent laoreet in enim ut placerat.\nPraesent a facilisis turpis.';

    expect(textInDiv(str, width)).to.equal(expected);
    });

    it('returns the string on new lines depending on the width chosen', function () {

      let str = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam nec consectetur risus. Cras vel urna a tellus dapibus consequat. Duis bibendum tincidunt viverra. Phasellus dictum efficitur sem quis porttitor. Mauris luctus auctor diam id ultrices. Praesent laoreet in enim ut placerat. Praesent a facilisis turpis.';
  
      let width = 30;
  
      let expected = 'Lorem ipsum dolor sit amet,\nconsectetur adipiscing elit.\nAliquam nec consectetur risus.\nCras vel urna a tellus dapibus\nconsequat. Duis bibendum\ntincidunt viverra. Phasellus\ndictum efficitur sem quis\nporttitor. Mauris luctus\nauctor diam id ultrices.\nPraesent laoreet in enim ut\nplacerat. Praesent a facilisis\nturpis.';
  
      expect(textInDiv(str, width)).to.equal(expected);
      });
});
