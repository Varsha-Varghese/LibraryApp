const express = require("express");
const loginrouter = express.Router();
const signupdata = require("../model/signupdata");
const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://userone:userone@fsdfiles.fneg2.mongodb.net/library?retryWrites=true&w=majority");
function router(nav){        
    loginrouter.get("/",function(req,res){
        res.render("login")       
    });
    loginrouter.post("/checkdata",function(req,res){
        const uname = req.body.uname;
        const pwd = req.body.pwd;
       
           
        signupdata.findOne({email:uname, password:pwd}, function(err,user)
        {           
           if(uname=="admin" && pwd=="12345")
            {             
                res.redirect("/addbooks");              
            }
            else if(user)
            {               
                res.redirect("/books");
            }
             else           
           console.log("Invalid user name/password");  
           res.render("login");
        }
    )         
    });
    
    return loginrouter;
}
module.exports = router;