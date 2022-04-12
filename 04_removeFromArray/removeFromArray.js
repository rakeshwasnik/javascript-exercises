/*
const removeFromArray = function() {
    totalArgs = arguments.length;
    if (totalArgs < 2) {
        return 'ERROR';
    }
    else {
        for(i=1; i<totalArgs; i++) {
            index = arguments[0].indexOf(arguments[i]);
            if (index == -1) {
                return 'ERROR';
            }
            else {
                arguments[0].splice(index,1);
            }
        }
        return arguments[0];
    }
};
*/

const removeFromArray = function(...args) {
    const Array = args[0];
    const newArray = [];
    Array.forEach((item) => {
        if (!args.includes(item)) {
            newArray.push(item)
        }
    })
    return newArray;
}

// Do not edit below this line
module.exports = removeFromArray;
