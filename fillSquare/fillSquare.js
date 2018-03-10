function fillSquare(square) {
    var longestArr = square.reduce(function (acc, item) {
        if (acc < item.length) {
            acc = item.length;
        }
        return acc;
    }, 0);
    
    var temp = new Array(longestArr).fill(null);
    var final = new Array(longestArr).fill(temp);
    final = final.map(function (item, index) {
        return (Object.assign([], item, square[index]));
    });
 
    return final;
}

module.exports = {fillSquare};