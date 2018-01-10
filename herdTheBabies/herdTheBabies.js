// Please do not change the name of this function

function herdTheBabies (str) {
    if (typeof str !== 'string' || str === '') return '';

    let newStr = str.split('').sort(function (a,b) {
        return b.toUpperCase().localeCompare(a.toUpperCase())

        }).reverse().join();

        return newStr; 
}

module.exports = {herdTheBabies};