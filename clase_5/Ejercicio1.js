
const inMsg = process.argv[2]
const hambre = ("si" === inMsg) ? (true) : (false)
let outMsg = "Tiene hambre"
if(false === hambre)
    outMsg = "No tiene hambre"
console.log(outMsg)

