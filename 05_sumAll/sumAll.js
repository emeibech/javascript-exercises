const sumAll = function(numStart, numEnd) {
//take the range of two parameters and put them in an array
const range = [];
//return error if either parameter is a negative number or not a number
if (numStart < 0 || numEnd < 0 || typeof numStart === 'string' || typeof numEnd === 'string') {
    return 'ERROR';
}
//return error if either parameter is an array
else if (Array.isArray(numStart) || Array.isArray(numEnd)) {
    return 'ERROR';
}

//condition to allow bigger number as the first parameter
else if (numStart < numEnd) {
    for (let i = numStart; i < numEnd + 1; i++) {
    range.push(i);
}
}

else if (numStart > numEnd) {
    for (let i = numEnd; i < numStart + 1; i++) {
        range.push(i);
    }
}

let total = 0;
//loop through the items in the array
for (const numbers of range) {
    //add and put total in a variable
     total += numbers;
}

//return sum
return total;
};

// Do not edit below this line
module.exports = sumAll;
