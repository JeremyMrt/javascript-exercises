const palindromes = function (string) {
    string = string.toUpperCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(' ').join('');
    const backwards = string.split('').reverse().join('');

    if (string === backwards) {
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;
