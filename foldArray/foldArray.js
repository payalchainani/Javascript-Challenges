// Please do not rename this function
function foldArray(arr, n = 1) {

    if (n === 0) {
        return arr.reverse();
    }
    if (Array.isArray(arr) === false) {
        return [];
    }
    
    let front = arr.slice(arr.length / 2);
    let back = arr.reverse().slice(arr.length / 2);

    
    if (arr.length % 2 === 1) {
        var middle = front.shift();
        back.shift();
    }
    
    var final = front.map(function (item, i) {
        return item + back[i];
    });
    // console.log(final);
    if (middle) {
        final.splice(0, 0, middle);
    }
    return foldArray(final, n - 1);

}

module.exports = {foldArray};