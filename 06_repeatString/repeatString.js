const repeatString = function(text,num) {
    let result = ''
    if (num<0){
        return "ERROR";
    } else {
        for (;num>0;num--){
                result+=text;
            }
        return result;
    }
};
repeatString("hey",3);

// Do not edit below this line
module.exports = repeatString;
