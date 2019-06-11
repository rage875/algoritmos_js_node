const express = require('express')
const app = express()

function rootHandler(rq, rs) {
    rs.set('Content-Type', 'text/plain')
    rs.send('<h1>Response by rootHandler</h1>')
}

function searchHandler(rq, rs) {
    rs.send('Response for GET')
    console.log(rq.query.q)
}

function authHandler(rq, rs)
{
    console.log(rq.body)
    rs.send('Response by authenthication handler')
}

app.use(express.json())
app.use('/' , express.static('static'))

app.all('/', rootHandler)


app.post('/auth', authHandler)

app.get('/search', searchHandler), 

app.listen(9000)