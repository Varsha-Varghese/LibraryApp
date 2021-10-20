const express = require("express");
const addproductrouter = express.Router();
const productdata = require("../model/productdata");
const multer = require("multer");
var storage = multer.diskStorage({
  destination:"./public/images/" ,
  filename:(req, file, cb)=>{
    cb(null, file.fieldname + '-' + Date.now())+"jpg/png";
  }
})

var upload = multer({ storage: storage }).single("image");
function router(nav){
    addproductrouter.get("/",function(req,res){
        res.render("addproducts",{
            nav
        })
    });
    addproductrouter.post("/addproduct",upload,function(req,res){
     var item = {
       name : req.body.name,
       quality : req.body.quality,
       quantity : req.body.quantity,
       image : req.file.filename
        }
      var product = productdata(item);
      product.save(); //saving to db
      res.redirect("/products");    
    
    });
    return addproductrouter;
}
module.exports = router;
   
