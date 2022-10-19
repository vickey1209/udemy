const express =require('express');
const router = express.Router();
const path = require ('path')  ;
const html = require ("html");
const rootdir = require("../util/path")


const products = [];
// router.use('/addproduct',(req, res, next) => {
            
//         res.send('<form style= "text-align: center;" action = "/product" method ="post"><input type="text" name="title"  ><button type=submit>add product</button> </form>');
//   })


//   router.post('/product ',(req, res,  next) =>{
//     console.log(req.body)
//     res.redirect('/home');
//  });


  //get request
  // /admin/addproduct => GET
router.get('/addproduct',(req, res) => {
 
       
  res.sendFile(path.join(rootdir,'views','addproduct.html'));
});

//post request
// /admin/addproduct => POST

router.post('/addproduct ', (req, res) => {
  products.push({title: req.body.title}); 
console.log(req.body);
// res.render("/");
res.redirect('/');
});


 //module.exports = router;

 exports.routes = router;
 exports.products = products;


