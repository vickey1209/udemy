const express = require('express');
const path = require ('path')

const rootdir = require("../util/path")
const admindata = require ('../routes/admin');
const router = express.Router();
// const pages = require('../views/shop')


router.get('/',(req, res) => {
    console.log (admindata.products)
  console.log(req.body);
  console.log ('dds')
    res.sendFile(path.join(rootdir,'views','shop.html'));
    // res.sendFile('shop.html');
    // res.sendFile('../views/shop.html');
    // res.sendFile(path.join(rootdir,'views','addproduct.html'));
  // res.render('shop.html');
  });
 
  module.exports = router;