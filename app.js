

const route = require ('./routes');

const express = require ('express');
const bodyParser = require('body-parser');
const path = require('path');
const admindata = require('./routes/admin')
const shoproutes = require('./routes/shop')
const app = express();
const routedir = require("./util/path.js")
app.set("view engine", "html");


app.use(bodyParser.urlencoded( {extended : true}));


app.use(bodyParser.json());
app.use(express.static(path.join(__dirname,'public')));
app.use(express.static(path.join(__dirname,'views')));

         // use of next() are as follows 

// app.use((req, res , next) => {
// console.log("middleware");
// next()  // allows the request to continue to the next middleware in line...
// });

// app.use((req, res , next) => {
//     console.log(" 2nd middleware");
//     res.send('<h1>hello form exp...</h1>');
//     next()
//     });

        
         // 2.use of next()


        //  app.use('/addproduct',(req, res, next) => {
            
        
        //     res.send('<form action = "/product" method ="post"><input type="text" name="title"><button type=submit>add product</button> </form>')
        //   })

        //  app.use('/product ',(res,req,next) =>{
        //     console.log(req.body)
        //     res.redirect('/');
        //  });
  

        

    // app.use('/',(req, res, next) => {
    //     console.log('the response will be sent by the next function ...')
    //     console.log(req.body)
    //     next()
    //   }, (req, res) => {
    //     res.send('<h1> processing....!</h1>')
    //   })


        // 3.use of next()

        // const cb0 = function (req, res, next) {
        //     console.log('CB0')
        //     next()
        //   }
          
        //   const cb1 = function (req, res, next) {
        //     console.log('CB1')
        //     next()
        //   }
          
        //   const cb2 = function (req, res) {
        //      console.log('CB1')
        //     res.send('Hello from C!')
        //   }
          
        //   app.get('/', [cb0, cb1, cb2])

        app.use('/admin',  admindata.routes);
        app.use( shoproutes);

     
app.use ((req, res, next) => {
    res.status(404).sendFile(path.join(routedir, 'views','404.html'));
});

    // console.log(route.sometext);

    //two ways to start server area as follows

    //   const server =http.createServer (app);
    //   server.listen(3000);

app.listen(3000);