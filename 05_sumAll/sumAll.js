const sumAll = function (firstNum, secNum) {
    let sum = 0;
    let adder;
    let total;

    if (!Number.isInteger(firstNum) || !Number.isInteger(secNum)) {
        return "ERROR";
    } else if (firstNum < 0 || secNum < 0) {
        return "ERROR";
    } else if (firstNum > secNum) {
        adder = secNum;
        total = firstNum;
    } else {
        adder = firstNum;
        total = secNum;
    }


    do {
        sum = sum + adder;
        adder++;
    } while (adder <= total)

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
