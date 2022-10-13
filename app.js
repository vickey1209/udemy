const http = require('http');
const fs = require ('fs')
//file system core module
const server =http.createServer((req , res)=>{
const url = req.url;
const method = req.method;

//routing request

if(url==='/')
  { 
res.write('<html>');
res.write('<body><form action = "/message " method = "post"><input type="text" name = "message"><button type = "submit">send</button></form></body>');
res.write('</html>');
return res.end();

  }
  if(url ==='/message' && method === 'post')
  {
    const body =[];
    req.on('data', (chunk)=>{
      console.log(chunk);
      body.push(chunk);
    });

    req.on('end',()=>{
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFileSync('message.txt','dummmy');
      console.log(parsedBody);
    });

res.statusCode=302;
res.setHeader('location', '/');
res.send.end(); 

  }
    res.setHeader('content-type', 'text/html');
    res.write('<html>');
    res.write('<body><h1>Processing....</h1></body>');
    res.write('</html>');
    res.end();
});

server.listen(3000);
