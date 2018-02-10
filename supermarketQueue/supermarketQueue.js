// Please do not change the name of this function

function queueTime (arr, num) {
    if (num === 1) {
        return arr.reduce(function (acc, item) {
            acc += item;
            return acc;
        }, 0);
    }

    if (num > 1) {
        const tills = {};
        let counter = num;
        for (let i = 0; i < num; i++) {
            tills[i] = 0;
        }
        arr.forEach(function (item) {
            if (counter === 0) {
                counter = num;
            }
            tills[counter - 1] += item;
            counter--;
        });
        var finalArr = [];

        for (key in tills) {
            finalArr.push(tills[key]);

        }
        var final = finalArr.reduce(function (acc, item) {
            if (item > acc) {
                acc = item;
            }
            return acc;
        });
        return final;
    }

}

module.exports = {queueTime};