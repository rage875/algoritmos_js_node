// 1- A Daniel le acaban de mandar una lista con sus calificaciones, quiere saber si su promedio
// es suficiente para tener una beca este año, el promedio mínimo que necesita es 8, el programa
// recibirá la cantidad de calificaciones y un arreglo de calificaciones para poder calcular el resultado

const myArgs = process.argv.slice(2)
const listCalif = myArgs.slice(1)
const cantCalif = parseInt(myArgs[0])
const promBeca = 8
let promedio = 0
let outMsg

for(let i = 0; i < listCalif.length; i++){
    promedio += parseFloat(listCalif[i])
}

promedio /= listCalif.length
console.log(promedio)

if(promBeca <= promBeca){
    outMsg = "Promedio para beca alcanzado"
}else{
    outMsg = "Promedio no alcanzado para beca"
}

console.log(outMsg)