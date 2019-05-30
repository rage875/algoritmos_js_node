// Crea un algoritmo que imprima la suma de los bonos del objeto persona

const persona = {
    nombre: "John Doe",
    bonos: [100, 500, 1300]
}

sumaBonos = 0;

for(let i = 0; i < persona.bonos.length; i++){
    sumaBonos += persona.bonos[i]
}

console.log("Suma de los bonos: ", sumaBonos)