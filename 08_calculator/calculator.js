const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a - b;
};

const sum = function(arr) {
	return arr.reduce((total, element) =>  total += element, 0);
};

const multiply = function(...args) {
  const arr = args[0]
  return arr.reduce((total, num) => total *= num);
};

const power = function(num, power) {
	return num ** power;
};

const factorial = function(num) {
  if (num === 0) {
    return 1;
  }
  else {
  let total = 1;
	for (let i = 1; i <= num; i++) {
    total *= i;
  }
  return total;
}
}

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
