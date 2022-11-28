const add = function(a,b) {
  return a + b
	
};

const subtract = function(a,b) {
	return a - b 
};

const sum = function(array) {
	return array.reduce((accumulator, currentValue )=> accumulator + currentValue, 0)
};

const multiply = function(array) {
	return array.reduce((accumulator, currentValue )=> accumulator * currentValue, 1)
};

const power = function(a,b) {
  return a**b
	
};

const factorial = function(a) {
  for (let i=2; i=a; i++) {
    i * (i-1)
  }
	
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
