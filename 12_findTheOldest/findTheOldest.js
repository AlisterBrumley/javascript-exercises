const findTheOldest = function (people) {
    return people.reduce((oldest, person) => {
        oldest.yearOfDeath = !oldest.yearOfDeath ? new Date().getFullYear() : oldest.yearOfDeath

        let oldAge = oldest.yearOfDeath - oldest.yearOfBirth;
        let personAge = person.yearOfDeath - person.yearOfBirth;
        return oldest = oldAge < personAge ? person : oldest;
    });
};

// Do not edit below this line
module.exports = findTheOldest;
