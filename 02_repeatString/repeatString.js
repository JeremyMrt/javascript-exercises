const repeatString = function(string, num) {
     let result = string ;
     if (num===0) {
        return ''
     } else if (num < 0) {
        return 'ERROR'
     } else { for (i=1 ; i < num ; i++) {
            result += string ;
    }

    return result;
}

};

// Do not edit below this line
module.exports = repeatString;


// Solution, more elegant
// const repeatString = function(word, times) {
//   if (times < 0) return 'ERROR';
//    let string = '';
//    for (let i = 0; i < times; i++) {
//      string += word;
//    }
//    return string;
//  };