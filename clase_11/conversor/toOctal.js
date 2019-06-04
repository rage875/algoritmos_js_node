function toOctal(n){
/* Sin push y join
    if(n < 0){
        n = 0xFFFFFFFF + n + 1
    }

    return(parseInt(n, 10).toString(8))
*/

//  Con push y join
    let inputNumber = n
    let base = 8
    let quotient = 0
    let remainderArray = []
    let resultArray = []

    if (inputNumber) {

        while (inputNumber) {
            quotient = parseInt(inputNumber / base)

            remainderArray.push(inputNumber % base)

            inputNumber = quotient
        }

        for (let i = remainderArray.length - 1; i >= 0; i--) {
            resultArray.push(remainderArray[i])
        }

        return resultArray.join('') // parseInt()
    } else {
        return `${input} is not a valid input`
    }
}

module.exports = toOctal