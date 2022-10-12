const http = require('http');

const server =http.createServer((req , res)=>{
    console.log(req.url , req.method , req.headers );

    res.setHeader('content-type', 'text/html');
    res.write('<html>')
    res.write('<body><h1>hello node</h1></body>')
    res.write('</html>')
});

server.listen(3000);