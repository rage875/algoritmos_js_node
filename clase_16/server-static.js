const express = require('express')
const serveStatic = require('server-static')
const path = require('path')
const app = express()

const serveMiddleware = serveStatic(path.resolve(__dirname, 'static'))

/*
function middleware(rq, rs, next){
    console.log('Middleware called')
    next()
}

function middlewareNext(rq, rs, next){
    // When a response is sent the execution finish
    rs.send('Middleware Next called')
}
*/

function rootHandler(rq, rs) {
    //rs.set('Content-Type', 'text/plain')
    rs.send('<h1>Response by rootHandler</h1>')
}

function searchHandler(rq, rs) {
    rs.send('Response for GET')
    console.log(rq.query.q)
}

//app.use(middlewareNext)

app.use(serveMiddleware)

app.all('/', rootHandler)

app.get('/search', searchHandler), 

app.listen(9000)