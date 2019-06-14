const express = require('express');
const app =  express();
const port = parseInt(process.argv[2]);

console.log('listening from port:', port);

app.use(express.static('public'))

app.get('/', (req, res) =>{
    res.send("Response from GET")
})

app.listen(port);