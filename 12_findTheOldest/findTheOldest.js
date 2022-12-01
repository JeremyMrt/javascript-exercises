const findTheOldest = function(people) {
  
    people.forEach(checkDeath);

    function checkDeath(people) {
        if (people.yearOfDeath === undefined) {
                people.yearOfDeath = new Date().getFullYear();
        }
    }
    
    const ordered = people.sort((a,b) => a.yearOfDeath - a.yearOfBirth > b.yearOfDeath - b.yearOfBirth ? -1 : 1)

    console.log(ordered[0]);
    return ordered[0];


};

// Do not edit below this line
module.exports = findTheOldest;
