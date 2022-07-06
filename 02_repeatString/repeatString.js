const repeatString = function(string, num) {
let newString = string;
for (let i = 2; i <= num; i++) {
    newString += string;
}
if (num == 0) {
    return '';
}
else if (num < 0) {
    return 'ERROR';
}
else {
return newString;
}
}

// Do not edit below this line
module.exports = repeatString;
