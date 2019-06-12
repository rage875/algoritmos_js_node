/*
Crea un folder e inicia un proyecto usando npm init
Crea un archivo index.js y otro que se llame myModule
Dentro de myModule exportar el valor 10
Dentro del archivo index importa myModule usando la sintaxis ES5
Imprime el valor del módulo exportado
Ejecuta el archivo index.js */

const myModule = require('./myModule')
console.log(myModule.myValue)