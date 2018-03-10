// Please do not change the name of this function
var vowelShift = function (str, n) {
  
  if (n === 0) return str;

  str = str.split('');
  let vowels = '',
  location = [];

  for (let i = 0; i < str.length; i++)
    if (/[aeiouAEIOU]/.test(str[i])) {

      vowels += str[i];
      location.push(i);
      //       console.log(vowels)
      //       console.log(vowels.length)
    }

  vowels = vowels.substring(vowels.length - n, vowels.length) + vowels.substring(0, vowels.length - n);
  //   console.log(vowels)
  for (let i = 0; i < location.length; i++)
  str[location[i]] = vowels[i];
  return str.join('');
};

if (typeof module !== 'undefined') {
  module.exports = {
    vowelShift
  };
}
