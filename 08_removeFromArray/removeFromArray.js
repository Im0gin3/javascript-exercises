const removeFromArray = function(arr) {
    for (let argument=1;argument<arguments.length;argument++){
        while (arr.includes(arguments[argument])){
            const getIndex = arr.findIndex(item => item===arguments[argument]);
            arr.splice(getIndex,1);
        }
    }
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
