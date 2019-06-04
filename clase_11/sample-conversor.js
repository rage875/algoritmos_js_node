const conversor = require('./conversor')

n = parseInt(process.argv[2])

console.log("Decimal: ", n)
console.log("Binary:", conversor.toBinary(n))
console.log("Hexadecimal:", conversor.toHexadecimal(n))
console.log("Octal:", conversor.toOctal(n))