"use strict";

var values = _interopRequireWildcard(require("../myModule"));

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = Object.defineProperty && Object.getOwnPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : {}; if (desc.get || desc.set) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } } newObj["default"] = obj; return newObj; } }

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
console.log(values["default"], values.myValue);