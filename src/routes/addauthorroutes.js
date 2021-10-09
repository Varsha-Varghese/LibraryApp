const express = require("express");
const addauthorrouter = express.Router();
function router(nav){
    addauthorrouter.get("/",function(req,res){
        res.render("addauthors");
    });
    addauthorrouter.get("/addauthor",function(req,res){
        res.send("Author is added");
    });
    return addauthorrouter;
}
module.exports = router;
   
