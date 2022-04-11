const reverseString = function(str) {
    reverseSTR = '';
    for (i = str.length-1; i>=0; i--){
        reverseSTR = reverseSTR+str[i];
    }
    return reverseSTR;
};

// Do not edit below this line
module.exports = reverseString;
