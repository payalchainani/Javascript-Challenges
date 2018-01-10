// Please do not change the name of this function
var sentenceToCamelCase = function (str, bool) {
  if (bool == undefined)  return camelToEnglish(str);
  if (bool === true) return TrueCamelCase(str);
  return FalseCamelCase(str);

  
  function TrueCamelCase (str) {
    str = str.split(' ');
      for (var i = 0; i < str.length; i++) {
        str[i] = str[i].split('');
        str[i] = str[i][0].toUpperCase() + str[i].slice(1).join('');
      }
        return str.join('');
  }

  function FalseCamelCase (str) {
    return str.replace(/\W+(.)/g, function(match, chr) {
      return chr.toUpperCase();
    });
  }

  function camelToEnglish (str) {
    str = str.replace(/([A-Z])/g, ' $1');
    var newString = str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
      return newString + '.';
  }
};

if ( typeof module !== 'undefined') {
  module.exports = {sentenceToCamelCase};
}
