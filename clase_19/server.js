const express = require('express')
const app = express()
const port = parseInt(process.argv[2])

app.use(express.static("public"))

app.listen(port)