const add = function(a,b) {
	return a+b;
};

const subtract = function(a,b) {
	return a-b;
};

const sum = function(arr) {
	return arr.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
};
const multiply = function(arr) {
  return arr.reduce((accumulator,currentValue)=> accumulator*currentValue,1);
};

const power = function(a,b) {
  let result = 1;
	for (let i =0;i<b;i++){
    result *= a;
  }
  return result;
};

const factorial = function(a) {
	let num=a;
  let result = 1;
  if (num===0){
    return result;
  }
  while (num>1){
    result *= num;
    num--; 
  }
  return result;
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
