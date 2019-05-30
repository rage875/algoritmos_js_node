// Crea un algoritmo que imprima la cantidad de partidas ganadas por el objeto jugador

const jugador = {
    nombre: "John Doe",
    partidas: [true, false, true, true]
}

let cantPartGanadas = 0;

for(let i = 0; i < jugador.partidas.length; i++){
    if(true === jugador.partidas[i])
    {
        cantPartGanadas++
    }
}

console.log("Cantidad de partidas ganadas: ", cantPartGanadas)