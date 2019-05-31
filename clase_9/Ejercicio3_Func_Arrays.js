// Paco no estudió mucho para sus últimos exámenes,
// quiere saber cuántos exámenes tendrá que realizar de nuevo,
// el programa recibirá la cantidad de exámenes y un arreglo de calificaciones
// para poder calcular el resultado

function repExamenes(listExamenes) {
    const cantExamenes = listExamenes.length
    const calMinAprob = 6
    let cantAprob = 0
    
    for(let i = 0; i < cantExamenes; i++){
        if(calMinAprob <= listExamenes[i]){
            cantAprob++
        }
    }

    return (cantExamenes-cantAprob)
}

const persona = {
    nombre  : "Paco",
    listExamenes : [10, 7.5, 5.9, 8]
}

console.log("Numero de examenes para repetir: ", repExamenes(persona.listExamenes))
