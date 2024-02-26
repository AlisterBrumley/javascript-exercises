const palindromes = function (fullStr) {
    forwardTemp = fullStr.replaceAll(/[^\w\s\']/g, "").replaceAll(/\s/g, "").toLowerCase();
    backwardTemp = forwardTemp.split("").reverse().join("");

    if (forwardTemp != backwardTemp) {
        return false
    } else {
        return true
    }
};

// Do not edit below this line
module.exports = palindromes;
