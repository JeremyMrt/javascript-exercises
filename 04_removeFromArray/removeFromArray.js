const removeFromArray = function(...args) {

    const array = args[0] ;

    const newArray = [] ;

    array.forEach((item)=> {
        if (!args.includes(item)) {
            newArray.push(item) ;
        }
    }) ;
    
    return newArray ;
    
//    for (i=0 ; i<arr.length ; i++) {
//        if (arr[i]===value) {
//            arr.splice(i,1)
//        } else continue
//    }

//    return arr ;

};

// Do not edit below this line
module.exports = removeFromArray;
