// Please do not change the name of this function

function counterIntelligence (str) {
    str = str.toLowerCase();
    var alphabet = 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz'
    var shift = alphabet.indexOf(str.slice(-1)) - 23;
    var array = str.split('');
    var shifted = array.map(function (item) {
        if (/\w/.test(item) === false) {
            return item
        }
        var num = alphabet.indexOf(item) - shift;
        return alphabet.slice(num, num + 1);
    })
    return shifted.join('').toUpperCase();
}

module.exports = {counterIntelligence};