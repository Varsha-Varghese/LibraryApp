const express = require("express");
const booksrouter = express.Router();
function router(nav){
    var books = [
        {
            title : "Tom and jerry",
            author : "Joseph Barbera",
            genre : "Cartoon",
            img : "tom.jpg"
        },
        {
            title : "Harry potter",
            author : "J k rowling",
            genre : "fantasy",
            img : "harry.jpg"
        },
        {
            title : "Pathummayude aadu",
            author : "Vaikkom muhammad basheer",
            genre : "drama",
            img : "basheer.jpg"
        }
    
    ]
    booksrouter.get("/",function(req,res){
        res.render("books",
        {
            nav,
            books
        });
    });
    booksrouter.get("/:id",function(req,res){
        const id = req.params.id;
        res.render("book",{
            nav,
            book: books[id]
        })
    });
    return booksrouter;
}

module.exports = router;