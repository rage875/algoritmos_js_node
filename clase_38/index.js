const express = require("express");
const bodyParser = require("body-parser");
const jwt = require("jsonwebtoken");
const expressJwt = require("express-jwt");

// Servidor de express creado
const app = express();

const jwtClave = "La Clave";
// Permite recibir paquetes de json en un body
app.use(bodyParser.json());
// Recibe un objeto con clave - url que no deben ser validadas
app.use(expressJwt({secret: jwtClave}).unless({ path: ["/login"]}));

app.use("*", (req, res, next) =>{
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Methods", "GET", "POST");
  res.header("Access-Control-Allow-Headers",
    "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With");
  next();
})

const noticias = [
  {id:1, titulo:"noticia"}
];

const user = {
  name: "norman",
  password: "12345"
}

app.get("/noticias", (req, res) =>{
  res.send(noticias);
})

app.post("/login", (req, res) =>{
  console.log(req.body)
  if((req.body.name === user.name) && (req.body.password === user.password)){
    let token = jwt.sign({
      user: "norman"
    }, jwtClave);

    res.send(token);
  } else {
    res.status(401).end("Usuario incorrecto");
  }
})


// Servidor escuchando en el puerto 9000
app.listen(9000, () =>{
  console.log("Aplicacion puerto 9000");
})