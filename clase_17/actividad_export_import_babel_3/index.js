/*
Crea un folder e inicia un proyecto usando npm init
Crea un archivo index.js
Crea un archivo start.js donde uses babel-register para importar index.js
Crea una carpeta que se llame myModule y dentro crea un archivo index.js 
el cual debe exportar una variable llamada myValue con valor 10 usando export
y usando export default el valor 15
Dentro del archivo index.js de tu proyecto importa myModule usando la sintaxis ES6
Imprime el valor del módulo exportado y el valor de myValue
Ejecuta el archivo start.js*/

import * as values from './myModule'

console.log(values.default, values.myValue)