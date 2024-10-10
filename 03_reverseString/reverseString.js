const reverseString = function(word) {
    const word_array = word.split('');
    word_array.reverse();
    return word_array.join('');
};

// Do not edit below this line
module.exports = reverseString;
