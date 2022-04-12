const sumAll = function(start, end) {
    let sum = 0;

    if(start<0 || end<0 || (typeof start) != "number" || (typeof end) != "number") {
        return 'ERROR';
    }
    else if(start === end) {
        sum = start;
    }
    else if(start<end) {
        for(i=start; i<=end; i++) {
            sum = sum + i;
        }
    }
    else if(start>end) {
        for(i=end; i<=start; i++) {
            sum = sum + i;
        }
    }
    
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
