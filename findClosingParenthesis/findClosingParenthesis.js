// Please do not change the name of this function
var findClosingParenthesis = function (str, n = 1) {
  
  if (typeof str !== 'string') {
    return -1;
  }
  if (/\(/.test(str) === false) {
    return -1;
  }
  let indexes = [];
  let position = str.indexOf('(');
  
  while (indexes.length < n) {
    indexes.push(position);
    position = str.indexOf('(', position + 1);
  }

  return str.indexOf(')', indexes[indexes.length - 1]);
};


if (typeof module !== 'undefined') {
  module.exports = {findClosingParenthesis};
}
