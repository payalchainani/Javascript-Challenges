// Please do not change the name of this function
var palindrome = function (str) {
  if (typeof str !== 'string') {
    return false;
  }
  var backward = str.toLowerCase().split('').reverse().join('').replace(/\s/g, '');
  var forward = str.toLowerCase().replace(/\s/g, '');
  if (forward === backward) {
    return true;
  }
  return false;
  };


if (typeof module !== 'undefined') {
  module.exports = {palindrome};
}
