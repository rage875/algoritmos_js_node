const express = require('express')
const app = express()
const port = 9000

// Crea los handlers para la siguiente ruta ‘/’ 
// con los siguientes métodos: get, post, put y delete.
// Cada handler debe responder con el siguiente mensaje 
// Contestando una petición por <método>'

app.get('/', function (req, res) {
    res.send('Contestando una petición por GET')
})

app.post('/', function (req, res) {
    res.send('Contestando una petición por POST')
})

app.put('/', function (req, res) {
    res.send('Contestando una petición por PUT')
})

app.delete('/', function (req, res) {
    res.send('Contestando una petición por DELETE')
})

app.listen(port, function () { 
    console.log(`Example app listening on port ${port}!`)
})