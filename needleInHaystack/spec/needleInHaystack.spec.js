var path = require('path');
var expect = require('chai').expect;

var {needleInHaystack} = require(path.join(__dirname, '..', './needleInHaystack.js'));

var haystack = {
  name: 'Northcoders',
  description: 'Awesome coding bootcamp',
  staff: {
    tutors: 'James and Chris',
    support: 'Louise'
  },
  contactDetails: {
    web: 'https://northcoders.com',
    phone: '',
    address: {
      office: 'Northcoders, Gold 67, The Sharp Project, Manchester',
      postcode: 'M40 5BJ'
    }
  },
  reviews: {
    april: {
      chris: 'I love Northcoders',
      james: 'It is awesome!'
    },
    may: {
      louise: 'Northcoders is a fantastic coding bootcamp'
    }
  }
};

describe('needleInHaystack()', function () {
  'use strict';
  
  it('returns an empty array when given a needle that does not exist', function () {
    expect(needleInHaystack(haystack, 'howdy')).to.eql([]);
  });

  it('returns all properties that contain the needle (in its exact form)', function () {
    expect(needleInHaystack(haystack, 'M40')).to.eql(['contactDetails.address.postcode']);
    expect(needleInHaystack(haystack, 'coding')).to.eql(['description', 'reviews.may.louise']);
    // expect(needleInHaystack(haystack, 'NorThcOdErs')).to.eql(['contactDetails.address.office', 'contactDetails.web', 'name', 'reviews.april.chris', 'reviews.may.louise']);
  });

});
