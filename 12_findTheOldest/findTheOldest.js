const findTheOldest = function(people) {
    let currentYear = new Date().getFullYear();
    const isOldest = people.sort((a, b) => (currentYear - a.yearOfBirth) > (currentYear - b.yearOfBirth) ? -1: 1)[0];
    if (isOldest.yearOfDeath == undefined) return isOldest;
    return people.sort((a, b) => (a.yearOfDeath - a.yearOfBirth) > (b.yearOfDeath - b.yearOfBirth) ? -1: 1)[0];
}
// Do not edit below this line
module.exports = findTheOldest;
