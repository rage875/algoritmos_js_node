// Crea un algoritmo que imprima la temperatura más alta

const temperaturas = [
    19, 24, 25, 30, 10
]

let tempMayor = 0;

for(let i = 0; i < temperaturas.length; i++){
    if(tempMayor <  temperaturas[i])
    {
        tempMayor = temperaturas[i]
    }
}

console.log("Temperatura mas alta: ", tempMayor)