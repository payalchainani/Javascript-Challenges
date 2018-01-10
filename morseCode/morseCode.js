// Please do not change the name of this function
var morseDecode = function (str, toMorse) {
  if (typeof str !== 'string' || !str) return '';

var morse = {
'.-': 'A',
'-...': 'B',
'-.-.': 'C',
'-..': 'D',
'.': 'E',
'..-.': 'F',
'--.': 'G',
'....': 'H',
'..': 'I',
'.---': 'J',
'-.-': 'K',
'.-..': 'L',
'--': 'M',
'-.': 'N',
'---': 'O',
'.--.': 'P',
'--.-': 'Q',
'.-.': 'R',
'...': 'S',
'-': 'T',
'..-': 'U',
'...-': 'V',
'.--': 'W',
'-..-': 'X',
'-.--': 'Y',
'--..': 'Z',
'.----': '1',
'..---': '2',
'...--': '3',
'....-': '4',
'.....': '5',
'-....': '6',
'--...': '7',
'---..': '8',
'----.': '9',
'-----': '0',
'.-.-.-': '.',
'--..--': ',',
'..--..': '?',
'-..-.': '/',
'.--.-.': '@'
};

return str
.split('   ')
// map to create new version
.map(
word => word
// split again on single spaces to split the chars
.split(' ')
// map again, and use letter from the morse obj
.map(
letter => morse[letter]
// join back up on no spaces to make words, and then use the spaces to make sentences
).join('')
).join(' ');
};

if ( typeof module !== 'undefined' ) {
  module.exports = {morseDecode};
}
