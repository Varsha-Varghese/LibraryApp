const express = require("express");
const deletebookrouter = express.Router();
const Bookdata = require("../model/Bookdata");

function router(nav){
  
    deletebookrouter.get("/:id",function(req,res){
        const id = req.params.id;
        console.log(req.params.id);
            
          Bookdata.findByIdAndDelete(id,function(err,results){
              if(err){
                  console.log(err);
              }
              else{
                  res.redirect("/books");
              }
          })
        
       
    });
   
       
    return deletebookrouter;
}

module.exports = router;