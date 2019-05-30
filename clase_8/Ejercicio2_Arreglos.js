// Crea un algoritmo que imprima la suma de los valores de esta matriz

const arreglo = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    ]

let suma = 0

for(let i = 0; i < arreglo.length; i++){
    for(let j = 0; j < arreglo[i].length; j++){
        suma += arreglo[i][j]
    }
}

console.log("Suma total es: ", suma)