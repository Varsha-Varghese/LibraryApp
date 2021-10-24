const express = require("express");
const updatebookrouter = express.Router();
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
  
    updatebookrouter.get("/:id",function(req,res){
        const id = req.params.id;
        console.log(req.params.id);
        Bookdata.findOne({_id:id})       
        .then(function(book){
            
            res.render("updatebook",{
                nav2,
                book
            })
           
        })
       
    });
    updatebookrouter.post("/:id/update",upload,function(req,res){
        const id = req.params.id;
        console.log(req.params.id);
        var item = {
            title : req.body.title,
            author : req.body.author,
            genre : req.body.genre,
            image : req.file.filename
             }
          Bookdata.findByIdAndUpdate(id,item,{upsert:true},function(err,results){
              if(err){
                  console.log(err);
              }
              else{
                  res.redirect("/books");
              }
          })
        
       
    });
   
       
    return updatebookrouter;
}

module.exports = router;