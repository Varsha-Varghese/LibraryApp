const express = require("express");
const addauthorrouter = express.Router();
const authordata = require("../model/authordata");
const multer = require("multer");
var storage = multer.diskStorage({
  destination:"./public/images/" ,
  filename:(req, file, cb)=>{
    cb(null, file.fieldname + '-' + Date.now())+"jpg/png";
  }
})

var upload = multer({ storage: storage }).single("image");
function router(nav){
    addauthorrouter.get("/",function(req,res){
      res.render("addauthors",{
        nav
    })
    });
    addauthorrouter.post("/addauthor",upload,function(req,res){
        var authordetails = {
            name : req.body.name,
            books : req.body.books,
            image : req.file.filename
        }
        var authordesc = authordata(authordetails);
        authordesc.save();
        res.redirect("/authors");  
    });
  

    return addauthorrouter;
}
module.exports = router;
   
