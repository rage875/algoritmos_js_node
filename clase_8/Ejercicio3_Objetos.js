// Ejercicio3
// Joel tiene que pagar impuestos, él tiene una lista de ingresos y gastos,
// cada ingreso está representado en número y significan pesos, cada gasto tiene
// un concepto (texto) y el total del gasto en pesos. Los impuestos que debe pagar 
// son el 16% de sus ingresos menos el total de sus gastos que estén bajo el concepto 
// de: “salud”
const Joel = {
    listIngresos : [500,100,20],
    listGastos : [
        {concepto: "Juegos", gastoTotal:500},
        {concepto: "Salud", gastoTotal:300},
        {concepto: "Comida", gastoTotal:400},
        {concepto: "Salud", gastoTotal:100},
    ]
}

let ingresosTotales = 0
for(let i = 0; i < Joel.listIngresos.length; i++){
    ingresosTotales += Joel.listIngresos[i]
}
let ingresosDespuesImpuesto = ingresosTotales - (ingresosTotales * 0.16)

let gastoTotalSalud = 0
for(let i = 0; i < Joel.listGastos.length; i++){
    if("Salud" === Joel.listGastos[i].concepto)
    {
        gastoTotalSalud += Joel.listGastos[i].gastoTotal
    }
}

impuestoAPagar = ingresosDespuesImpuesto - gastoTotalSalud

console.log("Total a pagar: ", impuestoAPagar)

