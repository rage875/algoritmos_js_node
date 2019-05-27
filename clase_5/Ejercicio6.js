
const inDado1 = parseInt(process.argv[2])//parseInt(prompt("Resultado de dado 1:"))
const inDado2 = parseInt(process.argv[3])//parseInt(prompt("Resultado de dado 2:"))
const inDado3 = parseInt(process.argv[4])//parseInt(prompt("Resultado de dado 3:"))
let msg = "todos los dados son diferentes"
if(inDado1 === inDado2 === inDado3)
{
    msg = "todos los dados son iguales"
}
// 1 1 1  Todos iguales
// 1 1 2  Primer y Segundo lanzamientos iguales
// 1 2 1  Primer y Tercero lanzamiento iguales
// 1 2 2  Segundo y Tercero lanzamiento iguales
else if((inDado1 === inDado2 || inDado1 === inDado3) ||
        (/*inDado2 === inDado1*/inDado2 === inDado3)
        /*(inDado3 === inDado1 && inDado3 === inDado2)*/
  ) 
{
    msg = "Dos dados salieron iguales"
}
let outMsg = msg
console.log(outMsg)

