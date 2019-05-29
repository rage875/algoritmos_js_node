// Ejercicio2
// Joel tiene que informar a sus alumnos las materias que reprobaron, el tiene una lista de alumnos,
// cada alumno tiene un nombre y una lista de materias, cada materia tiene su nombre y su calificación,
// el promedio mínimo para aprobar es 6. Haz un algoritmo que escriba el nombre del alumno y la materia
// que reprobó
const listAlumno = [
    {nombre : "Alum1", listMateria : [{nombre:"Matematicas", listCalif:[5, 5, 5]}, {nombre:"Ingles", listCalif:[9, 9, 8]}]},
    {nombre : "Alum2", listMateria : [{nombre:"Matematicas", listCalif:[7, 7, 8]}, {nombre:"Ingles", listCalif:[1, 1, 10]}]},
    {nombre : "Alum3", listMateria : [{nombre:"Matematicas", listCalif:[9, 9, 7]}, {nombre:"Ingles", listCalif:[6, 6, 5]}]},
]

const califMinAprob = 6

for(let i=0; i < listAlumno.length; i++){
    for(let j=0; j < listAlumno[i].listMateria.length; j++)
    {
        let promedio = 0;
        for(let k=0; k < listAlumno[i].listMateria[j].listCalif.length; k++){
            promedio += listAlumno[i].listMateria[j].listCalif[k];
            //console.log(listAlumno[i].listMateria[j].listCalif[k])
        }

        promedio /= listAlumno[i].listMateria[j].listCalif.length

        //console.log(promedio)

        if(califMinAprob > promedio)
        {
            console.log("Alumno: " + listAlumno[i].nombre + " no aprobo la materia de: " + listAlumno[i].listMateria[j].nombre)
        }
    }
}