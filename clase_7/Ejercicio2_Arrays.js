// 2- Joel quiere ver el porcentaje de veces que falto a clases, el programa recibirá
// la cantidad de asistencias y un arreglo de asistencias para poder calcular el resultado,
// cada elemento esta representado por un valor booleano

const myArgs = process.argv.slice(2)
const listAsist = myArgs.slice(1)
const cantAsist = listAsist.length//parseInt(myArgs[0])
let numAsist = 0

for(let i = 0; i < cantAsist; i++){
    if("1" == listAsist[i]){
        numAsist++
    }
}

promedio = numAsist * 100 / cantAsist

console.log("Promedio de asistencia: " + promedio)

