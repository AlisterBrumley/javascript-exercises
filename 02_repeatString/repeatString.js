const repeatString = function (string, num) {

    if (num < 0) {
        return "ERROR"
    }
    
    let returnValue = "";

    for (let runs = 0; runs < num; runs++) {
        returnValue = returnValue + string;
    }

    return returnValue;
};

// Do not edit below this line
module.exports = repeatString;
