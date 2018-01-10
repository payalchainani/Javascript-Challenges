// Please do not change the name of this function
var getTweetData = function (string) {
//second attempt
var newArr = string.split('');
var tweetDataObj = {};
tweetDataObj.length = newArr.length;
tweetDataObj.tags = [];
tweetDataObj.mentions = [];
tweetDataObj.tagCount = 0;
tweetDataObj.mentionCount = 0;
tweetDataObj.urlCounter = 0;

function urlLookout(string) {
  var res = string.match(/(http(s)?:\/\/.)?(www\.)?[a-zA-Z0-9@:%._\+~#=]{2,280}\.[a-z]{2,6}\b([a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
  if(res == null)
      return false;
  else
      return true;
}

var wordArr = string.split(' ');

return wordArr.reduce(function(acc,word) {

  if (word.indexOf("#") > -1 && !acc.tags.includes(word)) {
    
    acc.tagCount ++;
    acc.tags.push(word);  
 }
 if (word.indexOf('@') > -1 && !acc.mentions.includes(word))
  {
    acc.mentionCount ++;
    acc.mentions.push(word)
  }
 
  if (urlLookout(word)) {
      acc.urlCounter ++;
    }
return acc;
},tweetDataObj);


//first attempt
// let res = {tags: [], mentions: [], tagCount: 0, mentionCount: 0, length: 0};

// let strLength = str.length;

// res.length = strLength
// var arr = str.split(" ")
//  for (var i = 0; i < arr.length; i++) {
//    if (arr[i].includes('#')) res.tags.push(arr[i]) && res.tagCount++
//    if (arr[i].includes('@')) res.mentions.push(arr[i]) && res.mentionCount++
//  }

// return res
// };
};

if ( typeof module !== 'undefined' ) {
  module.exports = {getTweetData};
}
