const fs = require ("fs")

const requestHandler = (req, res) =>{
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
    const body = [];
    req.on('data', (chunk)=>{
      console.log(chunk);
      body.push(chunk);
    });

    return req.on('end',()=>{
      const parsedBody = Buffer.concat(body).toString();
      const message = parsedBody.split('=')[1];
      fs.writeFile('message.txt',message , err =>{
        res.statusCode = 302;
        res.setHeader('location', '/');
        return res.end(); 
      });
      // console.log(parsedBody);
     
    }); 

  }
    res.setHeader('content-type', 'text/html');
    res.write('<html>');
    res.write(" <head><title>my first page </title></head>")
    res.write('<body><h1>Processing....</h1></body>');
    res.write('</html>');
    res.end();
};

//we can export file in different  ways are as below:-

module.exports = {
    handler : requestHandler,
    sometext : "processing completed"
};
                // or

    // module.exports.handler  = requestHandler,
    // module.exports.sometext = "processing completed"  

                  //or
    
    // exports.handler  = requestHandler
    // exports.sometext = "processing completed" 
                 
                  //or

   // module.export = requestHandler