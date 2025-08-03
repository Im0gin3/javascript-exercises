const leapYears = function(year) {
    if (year % 4 ===0){
        if ((year % 100 === 0) && (year % 400 != 0)){
            return false;
        } else {
            return true;
        }
    } else {
        return false;
    }
};
//divisible by 4, but those divisible by 100 should also be divisible by 400.
// Do not edit below this line
module.exports = leapYears;
