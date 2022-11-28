const sumAll = function(a,b) {
 
    if(a<0 || b<0 || typeof a!=='number' || typeof b!=='number') {return'ERROR'
    } else { 

    var sum = 0 ;
    const j = Math.min(a,b) ;
    const k = Math.max(a,b) ;

    for (i=j ; i<=k ; i++) {
        sum = sum + i;
    } ;

    return sum ;
    }
};

// Do not edit below this line
module.exports = sumAll;
