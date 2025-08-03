const fibonacci = function(num) {
    let num1=1;
    let num2=1
    if (typeof num === "string"){
        num = +num;
    }
    if (num===num1){
        return num1;
    } else if (num===2){
        return num2;
    } else if (num===0){
        return 0;
    } else if (num<0){
        return "OOPS";
    }
    for (let i = 2; i<num; i++){
        result=num1+num2
        num1=num2;
        num2=result;
    }
    return num2;
};

// Do not edit below this line
module.exports = fibonacci;
