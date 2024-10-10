const sumAll = function(a, b) {
    if ((a < 0) || (b < 0)){
        return 'ERROR';
    } else if ((!Number.isInteger(a)) || (!Number.isInteger(b))) {
        return 'ERROR';
    }
    if (a > b) {
        temp = a;
        a = b;
        b = temp;
    }

    console.log(`a: ${a}\nb: ${b}`);
    let sum = 0;
    for (a; a < b + 1; a++) {
        sum = sum + a;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
