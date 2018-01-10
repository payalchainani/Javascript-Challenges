// Please do not change the name of this function
var pigLatin = function (str) {
  if (str === '' || typeof str !== 'string') return '';
  str = str.toLowerCase().split(' ').map(word => {
    return convertToPig(word);
  })
  return str.join(" ");

  
  function convertToPig (word) {  
    var firstConsonants = '';
    if (word[0].match(/[aeiou]/)) {
      return `${word}way`;
    }
    var res = word.split("").reduce( (acc, ele, i) => {
      if (i === 0 && !ele.match(/[aeiou]/) || !ele.match(/[aeiou]/) && firstConsonants.length === i) {
        firstConsonants += ele
      } else {
        return acc += ele;
      }
      return acc;
    }, '')
    return res + firstConsonants + 'ay';
  }
};

if (typeof module !== 'undefined') {
  module.exports = {pigLatin};
}
