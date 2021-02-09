'use strict';

/***
 * @author Ivan Gorshkov
 * get object of item:index value
 *
 * @param {string[]} sortedWords - array of sorted chars in words in alphabet order
 * @returns {Object.<string, {number[]}>}
 */
const getAnagramWordsIndex = (sortedWords) => {
    const indexMap = {};
    sortedWords.forEach(value => {
        indexMap[value] = sortedWords.reduce((accumulator, currentValue, index) => {
            if (value === currentValue) { accumulator.push(index); }
            return accumulator;
        }, []);
    });
    console.log(indexMap)
    return indexMap;
}

/***
 * @author Ivan Gorshkov
 * get array of arrays of anagram words from indexMap and defualt array of words
 *
 * @param {Object.<string, {number[]}>} indexMap - object of item:index value
 * @param {string[]} arr - unique array of words
 * @returns {string[][]} - anagram array of arrays
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
 * @author Ivan Gorshkov
 * get array of arrays of anagram words input array of words
 *
 * @param {string[]} input - array of words
 * @returns {string[][]} - anagram array of arrays
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


