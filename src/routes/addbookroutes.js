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
function router(nav){
    addbookrouter.get("/",function(req,res){
        res.render("addbooks",{
            nav
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
    addbookrouter.get("/addbooks/books/book",function(req,res){
      res.render("book",{
        nav,
        book
    })
      
  });
    return addbookrouter;
}
module.exports = router;
   
