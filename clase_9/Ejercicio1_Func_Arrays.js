// A Daniel le acaban de mandar una lista con sus calificaciones,
// quiere saber si su promedio es suficiente para tener una beca este año,
// el promedio mínimo que necesita es 8, el programa recibirá la cantidad de calificaciones
// y un arreglo de calificaciones para poder calcular el resultado

function promedioSufBeca(listCalif) {
    const minCalfAprob = 8
    let promedio = 0
    let beca = false

    for(let i = 0; i< listCalif.length; i++)
    {
        promedio += listCalif[i];
    }
    promedio /= listCalif.length

    return (minCalfAprob <= promedio)
}

const persona = {
    nombre  : "Daniel",
    listCal : [10, 9, 9]
}

console.log(true === promedioSufBeca(persona.listCal) ?
    ("Beca alcanzada") : ("Beca no alcanzada"))