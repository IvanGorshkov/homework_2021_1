
const anagram = function (input) {
    input = input.filter((value,index) => !input.includes(value,index+1))
    let sortedWords = input.map(item => item.split('').sort((left, right) => {
        return left > right
    }).join(''))

    let indexMap = new Map()
    sortedWords.forEach(value => {
        indexMap[value] = sortedWords.reduce((accumulator, currentValue, index) => {
            if (value === currentValue) { accumulator.push(index) }
            return accumulator
        }, [])
    })

    let anagramArray = []
    for (const item in indexMap) {
        anagramArray.push(indexMap[item].map(index => input[index]).sort((left, right) => {
            return left > right
        }))
    }

    return anagramArray.filter((value) => {
        return value.length > 1
    }).sort((left, right) => {
        return left[0] > right[0]
    })
}