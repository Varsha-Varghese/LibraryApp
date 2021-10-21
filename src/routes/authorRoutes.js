const express = require("express");
const authorsrouter = express.Router();
const authordata = require("../model/authordata");
function router(nav){
    // var authors = [
    //     {
    //         author : "Joseph Barbera",
    //         Books : "Tom and jerry",
    //         img : "joseph.jpg"
    //     },
    //     {           
    //         author : "J k rowling",
    //         Books : "Harry potter",
    //         img : "jk.jpg"
    //     },
    //     {           
    //         author : "Vaikkom muhammad basheer",
    //         Books : "Pathummayude aadu",
    //         img : "vbasheer.jpg"
    //     }    
    // ]
    authorsrouter.get("/",function(req,res){
        authordata.find()
        .then(function(authors){
            res.render("authors",
            {
                nav,
                authors
            });
        })
    });
   authorsrouter.get("/:id",function(req,res){
        const id = req.params.id;
        authordata.findOne({_id:id})
        .then(function(author){
            res.render("author",{
                nav,
                author
            })
        })
    });
    return authorsrouter;
}

module.exports = router;