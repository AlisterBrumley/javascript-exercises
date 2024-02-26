const add = function(first, second) {
  return first + second;
};

const subtract = function(first, second) {
  return first - second;
};

const sum = function(array) {
  return array.reduce((total, number) => {
    return total + number;
  }, 0);
};

const multiply = function(array) {
  return array.reduce((total, number) => {
    if (!total) {
      return number;
    } else {
      return total * number;
    }
  });
};

const power = function(first, second) {
  return first ** second
};

const factorial = function(number) {
  if (number == 0) {
    return 1;
  }

  // slow way, fast way is recursive
  let fSum = 1;
  for (let i = 1; i <= number; i++) {
    fSum = fSum * i;
  }

  return fSum;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
