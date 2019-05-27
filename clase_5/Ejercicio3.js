
const inNombre = process.argv[2] //prompt("Nombre usuario:")
const inPass = process.argv[3] //prompt("Constrase;a:")
const nombre = "Luis03"
const password = "1234"
let msg = "Incorrecto"
if(nombre === inNombre && password === inPass){
    msg = "Correcto"
}
let outMsg = msg
console.log(outMsg)
