// Please do not change the name of this function
function foldString(str) {
  if(typeof str !== 'string' || str === '') return '';
  var arr = str.split('');

  if(arr.length%2 === 0) {
    let str1 = arr.slice(0,arr.length/2).reverse().join('');
    let str2 = arr.slice(arr.length/2).reverse().join('');
    return str1 + str2;
  }

  if(arr.length%2 !== 0) {
    let str1 = arr.slice(0,Math.floor(arr.length/2)).reverse().join('');
    let str2 = arr.slice(Math.ceil(arr.length/2)).reverse().join('');
    return str1 + arr.slice(Math.floor(arr.length/2),Math.ceil(arr.length/2)) + str2;
  }

  // str = str.split("");
  // var middle = Math.floor(str.length / 2);
  // var oddChar = str.slice(middle, (middle + 1))
  // var str1 = str.slice(0, middle);
  // var str2 = str.slice(middle);
  // var oddStr1 = str.slice(0, middle);
  // var oddStr2 = str.slice(middle + 1);

  // var joinedStrings = str1.reverse() + str2.reverse();
  // var oddJoinedStrings = oddStr1.reverse() + oddChar + oddStr2.reverse()

  // if (str.length % 2 === 0) return joinedStrings.replace(/,/g, '')
  //   return oddJoinedStrings.replace(/,/g, '')
}


module.exports = {foldString};
