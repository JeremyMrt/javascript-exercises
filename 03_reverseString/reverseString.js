const reverseString = function(input) {
    const inputArray= input.split ('');
    inputArray.reverse();

    const finalInput = inputArray.join('');

    return finalInput ;

    // or :  return string.split('').reverse().join(''); tout simplement
};

// Do not edit below this line
module.exports = reverseString;
