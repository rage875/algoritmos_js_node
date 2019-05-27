const peso = parseInt(process.argv[2])
const pesoIdeal = parseInt(process.argv[3])
const kilosPorSemana = parseInt(process.argv[4])
numSemanas = 0
pesoEnKilosABajar = peso - pesoIdeal

while(0 < pesoEnKilosABajar)
{
    pesoEnKilosABajar = pesoEnKilosABajar - kilosPorSemana
    numSemanas++
}
console.log("Numero de semanas: " + numSemanas)