// Please do not change the name of this function
function uniqueAndOrdered (list) {
    if (typeof list === 'string') list = list.split('');
  return list.filter(function (char,i) {
    return char !== list[i + 1];
  });

}

module.exports = {uniqueAndOrdered};
 