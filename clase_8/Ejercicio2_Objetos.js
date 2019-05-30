// Ejercicio2
// Joel tiene que dar un reconocimiento al alumno con mejor promedio de su clase,
// él tiene una lista de alumnos, cada alumno tiene un nombre y una lista de materias,
// cada materia tiene su nombre y su calificación. Haz un algoritmo que escriba el nombre
// del alumno que tenga el promedio más alto
const listAlumno = [
    {nombre : "Alum1", listMateria : [{nombre:"Matematicas", listCalif:[5, 5, 5]}, {nombre:"Ingles", listCalif:[9, 9, 8]}]},
    {nombre : "Alum2", listMateria : [{nombre:"Matematicas", listCalif:[7, 7, 8]}, {nombre:"Ingles", listCalif:[1, 1, 10]}]},
    {nombre : "Alum3", listMateria : [{nombre:"Matematicas", listCalif:[9, 9, 7]}, {nombre:"Ingles", listCalif:[6, 6, 5]}]},
]

let alumnoMayorPromedio;
let alumnoMayorMateria;
let alumnoMayorCalif = 0;

for(let k=0; k < listAlumno[0].listMateria.length; k++){
    for(let i=0; i < listAlumno.length; i++){
        let promedio = 0

        for(let j=0; j < listAlumno[i].listMateria[k].listCalif.length; j++){
            promedio += listAlumno[i].listMateria[k].listCalif[j]
        }
        promedio /= listAlumno[i].listMateria[k].listCalif.length

        if(alumnoMayorCalif < promedio)
        {
            alumnoMayorPromedio = listAlumno[i].nombre
            alumnoMayorMateria = listAlumno[i].listMateria[k].nombre
            alumnoMayorCalif = promedio
        }
    }

    console.log("Alumno con mayor promedio: ", alumnoMayorPromedio,
    " en la materia: ", alumnoMayorMateria,
    " con calificacion : " , alumnoMayorCalif)
}

