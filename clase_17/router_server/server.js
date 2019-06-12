/*Crea una carpeta llamada clase-17, inicia un repositorio
y un proyecto de node JS y crea un archivo llamado server.js,
Escribe un servidor que responda al puerto 9000

Crea una carpeta llamada auth, esta contendrá un archivo index.js

El index.js creará un Router y este tendrá 3 handlers 
(por el momento solo debes regresar algún mensaje) 
que corresponderán a las rutas login, logout, recovery.
Al terminar debes exportar el Router

Regresa a tu archivo server.js, importa el módulo auth recién creado 
y agregalo usando app.use sobre la ruta ‘/auth’,
accede a la ruta http://localhost:9000/auth/login, observa los resultados*/

const express = require('express')
const app = express()
const port = parseInt(process.argv[2])
const auth = require('./auth')

function getHandler_cbk(req, res){
    res.send("Response from GET")
}

app.use('/auth', auth)

app.get('/', getHandler_cbk)

app.listen(port)