const http = require('http');
const fs = require ('fs')

const server =http.createServer((req , res)=>{
const url = req.url;
const method = req.method;

if(url==='/')
  { 
res.write('<html>');
res.write('<body><form action = "/message " method = "post"><input type = "text" name = "message"><button type = "submit">send</button></form></body>');
res.write('</html>');
return res.end();

  }
  if(url ==='/message' && method === 'post')
  {
fs.writeFileSync('message.text','dummmy');
res.statusCode=302;
res.setHeader('location', '/');
res.send.end(); 

  }
    res.setHeader('content-type', 'text/html');
    res.write('<html>');
    res.write('<body><h1>hello node</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);
console.log("server is running at port")