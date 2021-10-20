const express = require("express");
const loginrouter = express.Router();
const signupdata = require("../model/signupdata");
const mongoose = require("mongoose");
const alert = require("alert");
mongoose.connect("mongodb+srv://userone:userone@fsdfiles.fneg2.mongodb.net/shoppingapp?retryWrites=true&w=majority");
function router(nav){        
    loginrouter.get("/",function(req,res){
        res.render("login")       
    });
    loginrouter.get("/checkdata",function(req,res){
        const uname = req.query.uname;
        const pwd = req.query.pwd;
        signupdata.findOne({email:uname, password:pwd}, function(err,user)
        {
           if(err || !user)
            {
             alert("invalid user name/password");
            }
            else
            res.redirect("/products");    
        }
    )         
    });
    return loginrouter;
}
module.exports = router;