//Ejercicio ejemplo
const pesosPorDia = parseFloat(process.argv[2]);
const pesosTotalesAhorrar = 10000;
const cantidadDias = 30;
const cantidadQuePuedeAhorrar = cantidadDias * pesosPorDia;
const alcanzaLosAhorros = cantidadQuePuedeAhorrar >= pesosTotalesAhorrar;

if(true == alcanzaLosAhorros){
    console.log("Ya la armaste");
}else{
    console.log("Sigue participando");
}