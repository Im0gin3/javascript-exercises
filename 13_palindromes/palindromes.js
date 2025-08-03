const palindromes = function (word) {
    const cleaned = word
    .toLowerCase()
    .split("")
    .filter((item)=>item !== "," && item !== "." && item !== " " && item !== "!" && item !== " " && item !== "?")
    .join("")
    const compare = cleaned
    .split("")
    .reverse()
    .join("")

    if (compare === cleaned){
        return true;
    } else{
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
