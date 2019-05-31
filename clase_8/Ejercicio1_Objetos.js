// Ejercicio1
// Joel tiene que mostrar los datos de su alumno más grande de edad, el tiene una 
// lista de alumnos, cada alumno tiene un nombre y un número con su edad. Haz un 
// algoritmo que escriba el nombre del alumno con mayor edad

const listAlumno = [
    {"nombre" : "Alum1", edad : 15},
    {nombre : "Alum2", edad : 16},
    {nombre : "Alum3", edad : 14}
]

let mayorEdad = 0;
let alumnoMayor
for(let i=0; i < listAlumno.length; i++){
    if(mayorEdad < listAlumno[i].edad)
    {
        mayorEdad = listAlumno[i].edad
        alumnoMayor = listAlumno[i].nombre
    }
}


console.log("El alumno mayor es:",alumnoMayor," de: ",mayorEdad," a;os")
