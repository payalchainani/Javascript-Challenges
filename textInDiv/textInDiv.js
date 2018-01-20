// Please do not change the name of this function
var textInDiv = function (str, width) {
  if (width < 15) return 'INVALID INPUT';
  if (str.length <= width) return str;

  let newStr = '';

  while (width < str.length) {
    let currentLine = str.lastIndexOf(' ', width);

    newStr += str.slice(0, currentLine) + '\n';
    str = str.slice(currentLine + 1);
  }

  return newStr + str;
  };

if ( typeof module !== 'undefined' ) {
  module.exports = {textInDiv};
}
 