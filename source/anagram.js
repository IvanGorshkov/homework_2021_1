"use strict"

const anagram = (input) => {
    const arr = input.filter((value,index) => !input.includes(value,index+1));
    const sortedWords = arr.map((item) => item
        .split('')
        .sort()
        .join('')
    );

    const indexMap = {};
    sortedWords.forEach(value => {
        indexMap[value] = sortedWords.reduce((accumulator, currentValue, index) => {
            if (value === currentValue) { accumulator.push(index); }
            return accumulator;
        }, []);
    });

    const anagramArray = [];
    for (const item in indexMap) {
        anagramArray.push(indexMap[item]
            .map((index) => arr[index])
            .sort());
    }

    return anagramArray.filter((value) => {
        return value.length > 1;
    }).sort();
};