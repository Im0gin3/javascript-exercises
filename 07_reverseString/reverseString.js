const reverseString = function(text) {
    const arr = text.split("");
    const reversed = arr.reverse().join("");
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
