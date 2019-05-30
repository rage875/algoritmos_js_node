// Crea un algoritmo que imprima el nombre completo del objeto persona (nombre y apellidos)

const persona = {
    "nombre completo": {
        nombre: "John",
        apellidos: "Doe"
    }
}

const nombreCompleto = persona["nombre completo"].nombre + " " + persona["nombre completo"].apellidos

console.log("Nombre completo de la persona: ", nombreCompleto)