// Please do not rename this function
var findMissingLetter = function (arr) {
  arr = arr.sort()
  let firstletter = arr[0].charCodeAt(0)
  let missingLetterCode = ''

  arr.reduce(function (acc, item, index) {
    if (item.charCodeAt(0) === (acc + index)) {
      return acc
    } else {
      missingLetterCode = item.charCodeAt(0)
    }
  }, firstletter)
  if (missingLetterCode) {
    return String.fromCharCode(missingLetterCode - 1)
  }
  return missingLetterCode
};

if (typeof module !== 'undefined') {
  module.exports = {findMissingLetter};
}
