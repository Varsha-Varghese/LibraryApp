const express = require("express");
const updateauthorrouter = express.Router();
const authordata = require("../model/authordata");
const multer = require("multer");

var storage = multer.diskStorage({
  destination:"./public/images/" ,
  filename:(req, file, cb)=>{
    cb(null, file.fieldname + '-' + Date.now())+"jpg/png";
  }
})

var upload = multer({ storage: storage }).single("image");
function router(nav2){
  
    updateauthorrouter.get("/:id",function(req,res){
        const id = req.params.id;
        console.log(req.params.id);
        authordata.findOne({_id:id})       
        .then(function(author){
            
            res.render("updateauthor",{
                nav2,
                author
            })
           
        })
       
    });
    updateauthorrouter.post("/:id/update",upload,function(req,res){
        const id = req.params.id;
        console.log(req.params.id);
        var authordetails = {
            name : req.body.name,
            books : req.body.books,
            image : req.file.filename
        }
          authordata.findByIdAndUpdate(id,authordetails,{upsert:true},function(err,results){
              if(err){
                  console.log(err);
              }
              else{
                  res.redirect("/authors");
              }
          })
        
       
    });
   
       
    return updateauthorrouter;
}

module.exports = router;