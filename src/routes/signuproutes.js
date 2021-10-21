const express = require("express");
const signuprouter = express.Router();
const signupdata = require("../model/signupdata");
function router(nav){        
    signuprouter.get("/",function(req,res){
        res.render("signup");       
    });  
    signuprouter.post("/adddata",function(req,res){
        var userdata = {
            name : req.body.name,
            mobileNo : req.body.mobileNo,
            email: req.body.email,
            password : req.body.password
           }
         var user = signupdata(userdata);
         user.save(); //saving to db
         res.redirect("/login");    
       
       });  
    return signuprouter;
}
module.exports = router;