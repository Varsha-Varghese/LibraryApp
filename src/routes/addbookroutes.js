const express = require("express");
const addbookrouter = express.Router();
function router(nav){
    addbookrouter.get("/",function(req,res){
        res.render("addbooks",{
            nav
        })
    });
    addbookrouter.get("/addbook",function(req,res){
        res.send("Book is added");
    });
    return addbookrouter;
}
module.exports = router;
   
