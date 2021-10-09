const express = require("express");
const loginrouter = express.Router();
function router(nav){
    
        
    loginrouter.get("/",function(req,res){
        res.render("login")
        
    });
    
    return loginrouter;
}

module.exports = router;