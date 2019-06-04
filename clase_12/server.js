const http = require('http')
const url =  require('url')
const port = 9000

function responseHandler(request, response){
    let url_parts = url.parse(request.url)
    response.writeHead(200, { 'Content-Type': 'text/plain' })
    response.write("Hello from pathname:" + url_parts.pathname)
    response.end()
}

const server = http.createServer(responseHandler)

server.listen(port)

// http://localhost:<puerto> en algun navegador