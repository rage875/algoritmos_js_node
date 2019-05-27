
const inDia = process.argv[2]//prompt("Que dia es?:")
const DiasSemana =["Lunes", "Martes","Miercoles", "Jueves", "Viernes", "Sabado", "Domingo"]
if(inDia === DiasSemana[0] || inDia === DiasSemana[2] || inDia === DiasSemana[4]){
    msg = "Clase de: Historia"
}
else if(inDia === DiasSemana[1] || inDia === DiasSemana[3]){
    msg = "Clase de: Esgrima"
}
else{
    msg = "Descansar"
}
let outMsg = msg
console.log(outMsg)
