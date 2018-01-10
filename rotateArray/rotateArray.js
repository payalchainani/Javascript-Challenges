// Please do not change the name of this function
var rotateArray = function (arr, num) {
  if (num === 0 || num === undefined) return arr;
  if (num > 0) {
      while (num--) arr.unshift(arr.pop())
  } else {    
    while (num++) arr.push(arr.shift())
  }
  return arr;

};

if ( typeof module !== 'undefined' ) {
  module.exports = {rotateArray};
}
