const findTheOldest = function(arr) {
    let oldIndex=0;
    let oldVal, toCompare;
    const arrLen=arr.length;
    const currentYear=new Date().getFullYear();
    for (let i = 0; i<arrLen;i++){
        if (arr[i].yearOfDeath===undefined){
            arr[i].yearOfDeath=currentYear;
        }
    }
    oldVal=arr[0].yearOfDeath - arr[0].yearOfBirth;
    for (let i = 1; i<arrLen;i++){
        toCompare = arr[i].yearOfDeath - arr[i].yearOfBirth;
        if (toCompare>oldVal){
            oldIndex=i;
            oldVal = toCompare;
        }
    }
    return arr[oldIndex];
};
// make a variable called oldest which can store the index. 
// loop through the array through for loop nd just store the older one. 


// Do not edit below this line
module.exports = findTheOldest;
