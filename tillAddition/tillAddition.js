// Please do not change the name of this function
var tillAddition = function (obj) {
  var amount = Object.values(obj)
  var cashMonies = Object.keys(obj).map(function (str) {
    if (str.indexOf('p') > -1) {
      str = str.replace(/[p]/g, '');
    }
    if (str.indexOf('£') > -1) {
      str = str.replace(/[£]/g, '');
      str = str * 100
    }
      return str
      
  }).map(function (num, index) {
      return num * amount[index]
}).reduce(function (acc, value) {
      return acc + value
  }, 0)
      return  '£' + (cashMonies / 100).toFixed(2)
};

if (typeof module !== 'undefined') {
  module.exports = {tillAddition};
}
