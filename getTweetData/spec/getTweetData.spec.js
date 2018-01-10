var path = require('path');
var expect = require('chai').expect;

var {getTweetData} = require(path.join(__dirname, '..', './getTweetData.js'));

describe('getTweetData()', function () {
  'use strict';

  it('exists', function () {
    expect(getTweetData).to.be.a('function');

  });

  it('takes a single tweet argument', function () {
    expect(getTweetData.length).to.equal(1);
  });

  it('returns us an object containing data from a tweet', function () {
    expect(getTweetData("My awesome tweet")).to.eql({tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 16, urlCounter: 0});

    expect(getTweetData("My awesome tweet to @northcoders")).to.eql({tags: [], mentions: ["@northcoders"], tagCount: 0, mentionCount: 1, length: 32, urlCounter: 0 });

    expect(getTweetData("My awesome tweet about #coding")).to.eql({tags: ['#coding'], mentions: [], tagCount: 1, mentionCount: 0, length: 30, urlCounter: 0});

    expect(getTweetData("My awesome tweet about #coding to @northcoders")).to.eql({tags: ['#coding'], mentions: ['@northcoders'], tagCount: 1, mentionCount: 1, length: 46, urlCounter: 0 });
  });

  it('returns the correct obect for a tweet with more than one mention and tag', function () {

    let tweetObj = getTweetData('I am #coding with @northcoders I love #coding and @northcoders');
   
    expect(tweetObj).to.eql({ tags: ['#coding'], mentions: ['@northcoders'], tagCount: 1, mentionCount: 1, length: 62 , urlCounter : 0})
   });

   it('returns the correct obect that includes url', function () {

     let tweetObj = getTweetData('I am #coding with @northcoders I love #coding and @northcoders check them out on https://northcoders.com');
    
     expect(tweetObj).to.eql({ tags: ['#coding'], mentions: ['@northcoders'], tagCount: 1, mentionCount: 1, length: 104 , urlCounter : 1})
    });


});
