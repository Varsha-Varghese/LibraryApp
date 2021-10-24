const express = require("express");
const addbookrouter = express.Router();
const Bookdata = require("../model/Bookdata");
const multer = require("multer");

var storage = multer.diskStorage({
  destination:"./public/images/" ,
  filename:(req, file, cb)=>{
    cb(null, file.fieldname + '-' + Date.now())+"jpg/png";
  }
})

var upload = multer({ storage: storage }).single("image");
function router(nav2){
    addbookrouter.get("/",function(req,res){
        res.render("addbooks",{
            nav2
        })
    });
    addbookrouter.post("/addbook",upload,function(req,res){
     var item = {
       title : req.body.title,
       author : req.body.author,
       genre : req.body.genre,
       image : req.file.filename
        }
      var book = Bookdata(item);
      book.save(); //saving to db
      res.redirect("/books");    
    
    });
    addbookrouter.get("/books",function(req,res){
      res.render("books",{
        nav2,
        books
    })
      
  });
    return addbookrouter;
}
module.exports = router;
   
