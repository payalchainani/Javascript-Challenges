var path = require('path');
var expect = require('chai').expect;

var {findPartner} = require(path.join(__dirname, '..', 'findPartner.js'));

const students = [
  ['Sam',  'Harriet', 'Mitch', 'Jonny', 'JD',  'Kavita'],
  ['Amul', 'Chris',   'Mauro', 'Ruth',  'Haz', 'Joshua']
];

describe('findPartner()', function () {
  'use strict';

  it('Returns an empty array if only given up  as a direction', function () {
    expect(findPartner(students, ['up'])).to.eql([]);
  });

  it('Returns correct student names if horizontal directions are passed', function () {
    expect(findPartner(students,['right'])).to.eql(['Harriet']);
    expect(findPartner(students,['left'])).to.eql(['Kavita']);
    expect(findPartner(students,['right', 'right', 'right'])).to.eql(['Harriet', 'Mitch', 'Jonny']);
  });
    
  it('Returns correct student names if horizontal and vertical directions are passed', function () {
    expect(findPartner(students,['right', 'up', 'up'])).to.eql(['Harriet']);
    expect(findPartner(students,['down', 'right',])).to.eql(['Amul', 'Chris']);
  });

});
