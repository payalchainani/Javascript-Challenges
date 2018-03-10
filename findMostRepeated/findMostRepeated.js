// Please do not change the name of this function
var findMostRepeated = function (arr) {

  var result = arr.reduce(function (acc, item) {

    if (acc[item]) {
      acc[item]++;
    } else {
      acc[item] = 1;
    }
    return acc;

  }, {});

  // console.log(Object.values(result));
  // console.log(Object.keys(result));

  var most = Object.keys(result).reduce(function (acc, ele) {
    if (result[ele] > 1 && result[ele] > acc)
      acc = result[ele];
      return acc;
  }, 0);
    
  var newArr = Object.keys(result).reduce(function (acc, ele) {
      if (result[ele] === most)
      acc.push(ele);
      return acc;
    }, []);  
    
  if (most === 0) return {elements:[], repeats: null};
  
  var newObj = {};
  
  newObj.elements = newArr;
  newObj.repeats = most;
  
  return newObj;
};

if (typeof module !== 'undefined') {
  module.exports = {findMostRepeated};
}
