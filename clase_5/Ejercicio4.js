
const inCalExamen1 = parseInt(process.argv[2])//parseInt(prompt("Examen 1:"))
const inCalExamen2 = parseInt(process.argv[3])//parseInt(prompt("Examen 2:"))
const inCalExamen3 = parseInt(process.argv[4])//parseInt(prompt("Examen 3:"))
const CalMinAprobar = 6
const CanMinPremio = 8.5
promedio =( inCalExamen1 + inCalExamen2 + inCalExamen3 ) / 3
let msg = "Castigo"
if(CanMinPremio <= promedio){
    msg = "Premio"
}
else if(CalMinAprobar <= promedio){
    msg = "Pasaste pero no hay premio"
}
let outMsg = msg +", Promedio de:"+ promedio
console.log(outMsg)
 