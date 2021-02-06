
const anagram = function (input) {
    input = input.filter((value,index) => !input.includes(value,index+1))
    let sortedWords = input.map(item => item.split('').sort().join(''))
    let reducedObj = new Map()
    let anagramArray = []

    sortedWords.forEach(value => {
        reducedObj[value] = sortedWords.reduce((acc, cur, index) => {
            if (value === cur) { acc.push(index) }
            return acc
        }, [])
    })

    for (const item in reducedObj) {
        anagramArray.push(reducedObj[item].map(value => input[value]).sort((left, right) => {
            return left > right
        }))
    }

    return anagramArray.filter((value) => {
        return value.length > 1
    }).sort((left, right) => {
        return left[0] > right[0]
    })
}