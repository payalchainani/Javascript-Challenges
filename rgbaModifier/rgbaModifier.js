// Please do not change the name of this function
var rgbaModifier = function (rgbaStr, percent, opacity) {
  var percentage = (100 + percent) / 100
  var prefix = rgbaStr.slice(0, 5)
  var extracted = rgbaStr.slice(5).substring(0, rgbaStr.length - 1)
  var values = extracted.split(',')
  var changed = values.map(function (item, index) {
    if (index === 3) {
      return opacity
    } else return Math.round(Number(item) * percentage)
  })
  var removeHiVal = changed.map(function (item) {
    if (item > 255) return 225
    if (item < 0) return 0
    else return item
  })
  return prefix + removeHiVal.join(',') + ')'
};

if (typeof module !== 'undefined') {
  module.exports = {rgbaModifier};
}
