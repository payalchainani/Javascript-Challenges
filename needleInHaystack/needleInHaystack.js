// Please do not change the name of this function
var needleInHaystack = function (haystack, needle) {
  var result = [];

  Object.keys(haystack).forEach(function (key) {
    if (typeof haystack[key] == 'string' && haystack[key].indexOf(needle) > -1) {
      result.push(key);
      
    } else if (typeof (haystack[key]) == 'object') {
      result = result.concat(needleInHaystack(haystack[key], needle)
        .map(function (ele) {
          return key + '.' + ele;
        }));
    }
    });
    return result.sort();
    };

if (typeof module !== 'undefined') {
  module.exports = {needleInHaystack};
}
