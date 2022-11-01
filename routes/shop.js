const express = require('express');
const path = require ('path');
const rootdir = require("../util/path");
const admindata = require ('./admin');
const router = express.Router();
// const pages = require('../views/shop')


router.get('/',(req, res) => {
    console.log ('shop.js', admindata.products)
  console.log(req.body);
 
    // res.sendFile(path.join(rootdir,'views','index'));
    // res.sendFile('shop.html');
    // res.sendFile('../views/addproduct.html');
    res.sendFile(path.join(rootdir,'views','shop.html'));
  // res.render('shop.html');
  });
 
  module.exports = router;