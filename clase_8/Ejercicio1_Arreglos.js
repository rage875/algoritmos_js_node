//Crea un algoritmo que imprima la suma de los valores de este arreglo

const arreglo = [2, 3, 4, 5]

let suma = 0

for(let i=0; i < arreglo.length; i++){
    suma += arreglo[i]
}

console.log("Suma total es: ", suma)