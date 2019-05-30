// Crea un algoritmo que imprima la calificación más alta del objeto alumno

const alumno = {
    nombre: "John Doe",
    calificaciones: [7, 10, 9, 6]
}

let calfMayor = 0;

for(let i = 0; i < alumno.calificaciones.length; i++){
    if(calfMayor <  alumno.calificaciones[i])
    {
        calfMayor = alumno.calificaciones[i]
    }
}

console.log("Calificacion mas alta: ", calfMayor)