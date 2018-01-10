const path = require('path');
const {expect} = require('chai');

const {validateAndFormatPhone} = require(path.join(__dirname, '..', './validateAndFormatPhone.js'));

describe('validateAndFormatPhone()', function () {
  'use strict';

  it('throws an error for an empty string', function () {
    const expectedErr = new Error('Invalid phone number');
    expect(validateAndFormatPhone('').message).to.eql(expectedErr.message);
  });

  it('throws an error for a US phone Number', function () {
    const expectedErr = new Error('Invalid phone number');
    expect(validateAndFormatPhone('1-800-633-3469').message).to.eql(expectedErr.message);
  });

  it('can recognise a UK phone number ', function () {
    expect(validateAndFormatPhone('07912290143')).to.eql('+447912290143');
    expect(validateAndFormatPhone('01616603202')).to.eql('+441616603202');
    expect(validateAndFormatPhone('07556677834')).to.eql('+447556677834');
    expect(validateAndFormatPhone('07803205225')).to.eql('+447803205225');
    });

    it('can recognise a UK phone number in +44 format', function () {
    expect(validateAndFormatPhone('+441616603202')).to.eql('+441616603202');
    });

    it('can recognise a valid UK phone number in 0044 format', function () {
    expect(validateAndFormatPhone('00441616603202')).to.eql('+441616603202');
    });

});
