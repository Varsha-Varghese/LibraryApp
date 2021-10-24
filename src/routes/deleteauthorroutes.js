const express = require("express");
const deleteauthorrouter = express.Router();
const authordata = require("../model/authordata");

function router(nav){
  
    deleteauthorrouter.get("/:id",function(req,res){
        const id = req.params.id;
        console.log(req.params.id);
            
          authordata.findByIdAndDelete(id,function(err,results){
              if(err){
                  console.log(err);
              }
              else{
                  res.redirect("/authors");
              }
          })
        
       
    });
   
       
    return deleteauthorrouter;
}

module.exports = router;