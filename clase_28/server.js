// Obtener paquete de express
const express = require("express")
// Obtener paquete de cors
const cors = require("cors")
// Obtener paquete para manejo de archivos
const multer = require("multer")

// Crear aplicacion de express
const app =  express()
// Crear aplicacion de multer
const upload = multer({ dest: "profile-pictures"})

// Agregar cors como middleware
app.use(cors())

// Indicarle la ruta profile donde va a recibir el archivo (que campo)
app.put("/profile", upload.single("avatar") , profileHandler)

// Tener un handler que pueda manejar archivos
function profileHandler(req, res) {
    console.log(req.body.name)
    console.log(req.file)

    res.status(200).end()
}

// Escuchar del puerto
app.listen("9000")