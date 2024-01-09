const reverseString = function(str) {
    const strLen = str.length;
    let strRet = "";

    for (let letters = 0; letters < strLen; letters++) {
        strRet = str[letters].concat(strRet);
    }

    return strRet;
};

// Do not edit below this line
module.exports = reverseString;
