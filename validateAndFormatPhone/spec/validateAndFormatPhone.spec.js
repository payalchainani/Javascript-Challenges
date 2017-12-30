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

});
