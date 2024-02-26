const palindromes = function (fullStr) {

    // removing punctuation, whitespace and setting to lower
    forwardTemp = fullStr.replaceAll(/[^\w\s\']/g, "").replaceAll(/\s/g, "").toLowerCase();
    // creating backwards str to compare
    backwardTemp = forwardTemp.split("").reverse().join("");

    if (forwardTemp != backwardTemp) {
        return false
    } else {
        return true
    }
};

// Do not edit below this line
module.exports = palindromes;
