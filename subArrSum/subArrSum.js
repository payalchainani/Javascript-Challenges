// Please do not change the name of this function
function subArrSum(arr) {
    let currentMaximum = 0;
    let max = 0;

    for (let i = 0; i < arr.length; i += 1) {
        currentMaximum = Math.max(0, currentMaximum + arr[i]);
        max = Math.max(max, currentMaximum);
    }
    return max;
}

module.exports = {subArrSum};
