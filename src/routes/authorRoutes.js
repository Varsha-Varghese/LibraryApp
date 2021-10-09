const express = require("express");
const authorsrouter = express.Router();
function router(nav){
    var authors = [
        {
           
            author : "Joseph Barbera",
            Books : "Tom and jerry",
            img : "joseph.jpg"
        },
        {
           
            author : "J k rowling",
            Books : "Harry potter",
            img : "jk.jpg"
        },
        {
           
            author : "Vaikkom muhammad basheer",
            Books : "Pathummayude aadu",
            img : "vbasheer.jpg"
        }
    
    ]
    authorsrouter.get("/",function(req,res){
        res.render("authors",
        {
            nav,
            authors
        });
    });
   authorsrouter.get("/:i",function(req,res){
        const i = req.params.i;
        res.render("author",{
            nav,
            author: authors[i]
        })
    });
    return authorsrouter;
}

module.exports = router;