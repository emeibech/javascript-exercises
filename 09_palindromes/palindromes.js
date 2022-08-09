const palindromes = function (string) {
    const stringArray = [...string.toLowerCase()];
    let processedArray = stringArray
        .filter(punct => punct.replace(/[ !.,]/g, ''))
        .reverse();
    let stringed = processedArray.toString();
      return processedArray.reverse().toString() === stringed ? true : false;
    }

// Do not edit below this line
module.exports = palindromes;
