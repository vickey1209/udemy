const http = require('http');

const route = require ('./routes')

const server =http.createServer (route.handler)

console.log(route.sometext)

server.listen(3000);