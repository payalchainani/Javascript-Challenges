// Please do not change the name of this function
function alphabetReplace(str) {
if (typeof str !== 'string' || !str) return str;
if (str.match(/[!@#$%^?><\/.,&*()]/g)) return undefined;

    return str.toLowerCase().split(' ').map(function (ele) {
        return ele.split('').map(function (letter) {
            return (letter.charCodeAt() - 96);
        });
    }).toString().split(',').join(' ');

}

module.exports = {alphabetReplace};
