// Please do not change the name of this function
const validateAndFormatPhone = function (number) {
  if(!number) {
    return new Error('Invalid phone number');
  }
  else if(number.slice(0,2) === '07' || number.slice(0,2) === '02' || number.slice(0,2) === '01')
{return '+44' + number.slice(1,number.length) }
else if(number.slice(0,3) === '+44' && number.length < 14 )
{return number}
else if(number.slice(0,4) === '0044' && number.length < 15 )
{return '+44' + number.slice(4,number.length)}
else {return new Error('Invalid phone number')}
};

if ( typeof module !== 'undefined' ) {
  module.exports = {validateAndFormatPhone};
}
