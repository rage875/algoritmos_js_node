// Crea un algoritmo que imprima la suma de el total de crédito que tiene en tarjetas el objeto persona

const persona = {
    nombre: "John Doe",
    tarjetas: [{
        credito: 19000
    },
    {
        credito: 50000
    }]
}

let creditoTotal = 0;

for(let i = 0; i < persona.tarjetas.length; i++){
    creditoTotal += persona.tarjetas[i].credito
}

console.log("Credito total de persona: ", creditoTotal)