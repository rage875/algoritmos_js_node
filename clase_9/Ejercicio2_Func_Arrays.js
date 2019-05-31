// Joel quiere ver el porcentaje de veces que falto a clases,
// el programa recibirá la cantidad de asistencias y un arreglo de asistencias
// para poder calcular el resultado, cada elemento esta representado por un valor booleano

function porcDeAsist(listAsist) {
    const cantAsist = listAsist.length
    let numAsist = 0
    
    for(let i = 0; i < cantAsist; i++){
        if("1" == listAsist[i]){
            numAsist++
        }
    }
 
    promedio = numAsist * 100 / cantAsist

    return promedio
}

const persona = {
    nombre  : "Joel",
    listAsist : [true, false, true, true]
}

console.log("Promedio de asistencia: " + porcDeAsist(persona.listAsist))