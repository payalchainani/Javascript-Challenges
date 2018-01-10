// Please do not change the name of this function
var changeCalculator = function (pence) {
  var cashMoniesArr = [200,100,50,20,10,5,2,1];

  var cashMoniesObject = {
    200 : 0,
    100 : 0,
    50 : 0,
    20 : 0,
    10 : 0,
    5 : 0,
    2 : 0,
    1 : 0, 
  }; 

  for (let i = 0; i < cashMoniesArr.length; i++) {
    while (pence >= cashMoniesArr[i]) {
      cashMoniesObject[cashMoniesArr[i]]++;
      pence -= cashMoniesArr[i];
    }
  }

  for (let key in cashMoniesObject) {
    if (cashMoniesObject[key] === 0) {
      delete cashMoniesObject[key];
    }
  }

  return cashMoniesObject;
};

if ( typeof module !== 'undefined' ) {
  module.exports = {changeCalculator};
}
