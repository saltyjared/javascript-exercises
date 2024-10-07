const repeatString = function(string, num) {
    // handle edge case of num being a negative number
    if (num < 0) {
        return 'ERROR'
    }

    res = '';
    for (let i = 0; i < num; i++) {
        res += string;
    }
    return res
};

// Do not edit below this line
module.exports = repeatString;
