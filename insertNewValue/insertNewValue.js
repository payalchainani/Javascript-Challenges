function insertNewValue (arr, num) {
if (!Array.isArray(arr)) return [];
if (typeof num !== 'number') return 0;

var midPoint;
var minPoint = 0;
var maxPoint = arr.length - 1;

    while (minPoint <= maxPoint) {
        midPoint = Math.floor((minPoint + maxPoint) / 2);
        if (midPoint === 0 && arr[midPoint] > num) {
            arr.splice(midPoint, 0, num);
            return arr;
        } else if (midPoint === arr.length - 1 && arr[midPoint] < num) {
            arr.splice(midPoint + 1, 0, num);
            return arr;
        } else if (arr[midPoint] <= num && arr[midPoint + 1] >= num) {
            arr.splice(midPoint + 1, 0, num);
            return arr;
        } else if (arr[midPoint] < num) minPoint = midPoint + 1;
        
        else maxPoint = midPoint - 1;
    }
}

module.exports = {insertNewValue};