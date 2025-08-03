// a function that accepts 2 numbers, and gives the sum of the total, including both the numbers
const sumAll = function(num1, num2) {
    if ((typeof(num1)=="number") && (num1>0) && (num2>0) &&
        (typeof(num2)=="number") && num1 % 1 ===0 && num2 % 1 ===0){
            if (num1>num2){
                let sum = 0;
                for (num2;num2<=num1;num2++){
                    sum+=num2;
                }
                return sum;
            } else if (num2>num1){
                let sum = 0;
                for (num1;num1<=num2;num1++){
                    sum+=num1;
                }
                return sum;
            }
    } else{
        return "ERROR";
    }
};

// Do not edit below this line
module.exports = sumAll;
