'use strict';

/***
 * get object of item:index value
 *
 * @param {array} sortedWords - array of sorted chars in words in alphabet order
 * @returns {object}
 */
const getAnagramWordsIndex = (sortedWords) => {
    const indexMap = {};
    sortedWords.forEach(value => {
        indexMap[value] = sortedWords.reduce((accumulator, currentValue, index) => {
            if (value === currentValue) { accumulator.push(index); }
            return accumulator;
        }, []);
    });
    return indexMap;
}

/***
 * get array of arrays of anagram words from indexMap and defualt array of words
 *
 * @param {object} indexMap - object of item:index value
 * @param {array} arr - unique array of words
 * @returns {array} - anagram array of arrays
 */
const getAnagramArray = (indexMap, arr) => {
    const anagramArray = [];
    for (const item in indexMap) {
        anagramArray.push(indexMap[item]
            .map((index) => arr[index])
            .sort());
    }

    return anagramArray.filter((value) => {
        return value.length > 1;
    }).sort();
}

/***
 * get array of arrays of anagram words input array of words
 *
 * @param {array} input - array of words
 * @returns {array} - anagram array of arrays
 */
const anagram = (input) => {
    const arr = input.filter((value,index) => !input.includes(value,index+1));
    const sortedWords = arr.map((item) => item
        .split('')
        .sort()
        .join('')
    );

    const indexMap = getAnagramWordsIndex(sortedWords);
    const anagramArray = getAnagramArray(indexMap, arr);
    return anagramArray;
};


