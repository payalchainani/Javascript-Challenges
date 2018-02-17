// Please do not change the name of this function
var romanNumeralEncoder = function (num) {
    const unitObj = {
    0:'',
    1:'I',
    2:'II',
    3:'III',
    4:'IV',
    5:'V',
    6:'VI',
    7:'VII',
    8:'VIII',
    9:'IX',
    10:'X'
    };

    const tenObj = {
    1:'X',
    2:'XX',
    3:'XXX',
    4:'XL',
    5:'L',
    6:'LX',
    7:'LXX',
    8:'LXXX',
    9:'XC'
    };
    
    if (num <= 10) {
    return unitObj[num];
    }
    if (num < 99) {
    var arr = (num).toString().split('');
    var tens = arr[0];
    var units = arr[1];
    return tenObj[tens] + unitObj[units];
    }
    if (num === 100) {
    return 'C';
    }
};

if (typeof module !== 'undefined') {
  module.exports = {romanNumeralEncoder};
}
