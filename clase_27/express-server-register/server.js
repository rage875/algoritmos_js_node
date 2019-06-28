// Get express package
const express = require("express")
// Create express app
const app = express()
// Add static express as middleware
app.use(express.static('public'))
app.use(express.static('js'))

// Indicate path and method that will catch the info to register
app.post("/public/register" , (req, res) => {
    res.json({msg: "user added"});
    //res.send(JSON.parse(res))
    //console.log(res.json().get("name"));

    res.status(200).end()
})

// Indicate path and method for main page
app.get("/public", (req, res) => {
    res.send("Response from GET")
})

app.listen(9000)