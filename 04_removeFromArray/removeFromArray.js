const removeFromArray = function(arr, ...toRemove) {
    // Checks if val in arr exists in toRemove, if so then filter out
    return arr.filter(val => !toRemove.includes(val))
};

// Do not edit below this line
module.exports = removeFromArray;
