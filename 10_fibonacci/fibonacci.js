const fibonacci = function(fIndex) {

    // input management
    if (fIndex < 0) {
        return "OOPS";
    } else if (fIndex == 0) {
        return 0;
    }

    // setting vars
    let fMinus = 1;
    let fMinusMinus = 0;
    let fNumber = 1;

    // looping to create fib numbers
    for (let i = 1; i < fIndex; i++) {
        fNumber = fMinus + fMinusMinus;
        fMinusMinus = fMinus;
        fMinus = fNumber;
    }
    
    return fNumber;
};

// Do not edit below this line
module.exports = fibonacci;
