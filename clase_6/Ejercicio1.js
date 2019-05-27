
const num1 = parseInt(process.argv[2])
const num2 = parseInt(process.argv[3])
let cantNum = num2-num1
let serieNumeros = Array(cantNum + 1)
if(0 < cantNum){
    for(i=0; i <= cantNum; i++){
        serieNumeros[i] = num1 + i
    }
    console.log(serieNumeros)
}
else{
    console.log("Numeros negativos, no soporta serie")
}