//3- Paco no estudió mucho para sus últimos exámenes,
// quiere saber cuántos exámenes tendrá que realizar de nuevo,
// el programa recibirá la cantidad de exámenes y un arreglo de calificaciones
// para poder calcular el resultado

const myArgs = process.argv.slice(2)
const listExamenes = myArgs.slice(1)
const cantExamenes = listExamenes.length//parseInt(myArgs[0])
const calMinAprob = 6
let cantAprob = 0

for(let i = 0; i < cantExamenes; i++){
    if(calMinAprob <= listExamenes[i]){
        cantAprob++
    }
}

console.log("Numero de examenes para repetir: " + (cantExamenes-cantAprob))

