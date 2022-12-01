const fibonacci = function(number) {
    let fiboStart = [0, 1, 1, 2, 3]
    if (number < 0) return 'OOPS'
    if (number < 5) return fiboStart[number]
    for (i=5 ; i <= number ; i++) {
        fiboStart.push(fiboStart[i-1] + fiboStart[i - 2])
    }
    return fiboStart[number]
};

// Do not edit below this line
module.exports = fibonacci;
