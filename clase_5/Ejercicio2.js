
const inNivel = parseInt(process.argv[2])//parseInt(prompt("Nivel del jugador:"))
let nivelJug = "Aprendiz"
if(20 <= inNivel){
    nivelJug = "Ninja"
}else if(10 <= inNivel){
    nivelJug = "Acrobata"
}
let outMsg = nivelJug
console.log(outMsg)
