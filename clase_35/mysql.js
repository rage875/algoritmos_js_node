const mysql = require("mysql");
let connection = mysql.createConnection({
    host : "localhost",
    user : "root",
    password : "voltSQL!_21",
    database : "my_db"
});

connection.connect();
connection.query("SELECT 1 + 1 AS solution", (err, result, fields) => {
    if(err) console.log(err);
    console.log(`La solucion es: ${result[0].solution}`);
})

connection.end();