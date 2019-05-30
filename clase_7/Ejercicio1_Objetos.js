// Ejercicio1
// Joel tiene que informar a sus alumnos quienes tienen que repetir curso, 
// el tiene una lista de alumnos, cada alumno tiene un nombre y una lista de calificaciones
// que se tienen que promediar para saber si el alumno está aprobado, el promedio mínimo para aprobar es 6.
// Haz un algoritmo que escriba el nombre de los alumnos que no aprobaron.
const listAlumno = [
    {nombre : "Alum1", listCalif : [6,7,8,9]},
    {nombre : "Alum2", listCalif : [10,10,10,9]},
    {nombre : "Alum3", listCalif : [9,9,9,9]}
]

const califMinAprob = 6

for(let i=0; i < listAlumno.length; i++){
    let promedio = 0;
    for(let j=0; j < listAlumno[i].listCalif.length; j++)
    {
        promedio += listAlumno[i].listCalif[j];
    }
    promedio /= listAlumno[i].listCalif.length;
    //console.log(promedio)

    if(califMinAprob > promedio)
    {
        console.log("Alumno: " + listAlumno[i].nombre + " no aprobo")
    }
}