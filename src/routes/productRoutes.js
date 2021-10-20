const express = require("express");
const productsrouter = express.Router();
const productdata = require("../model/productdata");
function router(nav){
  
    productsrouter.get("/",function(req,res){
        productdata.find()
        .then(function(products){
            res.render("products",
            {
                nav,
               products
            });
        })
       
    });
   
    return productsrouter;
}

module.exports = router;