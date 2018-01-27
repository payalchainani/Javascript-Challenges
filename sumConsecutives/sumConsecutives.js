// Please do not change the name of this function
var sumConsecutives = function (arr) {
var finalArr = [];
arr.reduce(function (acc, item, i) {
  if (item === arr[i + 1]) {
    acc += item;
    return acc;
  }
  if (item !== arr[i + 1]) {
    acc += item;
    finalArr.push(acc);
    acc = 0;
    return acc;
  }
}, 0);
return finalArr;
};
// recursive

function reduceConsecutives(arr) {
  if (arr.every(function (item, i) {
      return item !== arr[i + 1]
    })) {
    return arr
  } else return reduceConsecutives(sumConsecutives(arr))
}


if (typeof module !== 'undefined') {
  module.exports = {sumConsecutives, reduceConsecutives};
}
