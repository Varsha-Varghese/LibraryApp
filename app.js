const express = require("express");
const app = new express();
const port = process.env.PORT || 5000;
const nav = 

[
    {
        link:"/login",name:"login"
    },
    {
        link:"/signup",name:"signup"
    },
    {
        link:"/books",name:"books"
    },
    {
        link:"/authors",name:"authors"
    },
    {
        link:"/addbooks",name:"Add Book"
    },
    {
        link:"/addauthors",name:"add authors"
    }
];

const booksrouter = require("./src/routes/bookRoutes")(nav);
const authorsrouter = require("./src/routes/authorRoutes")(nav);
const loginrouter = require("./src/routes/loginroutes")(nav);
const signuprouter = require("./src/routes/signuproutes")(nav);
const addbookrouter = require("./src/routes/addbookroutes")(nav);
const addauthorrouter = require("./src/routes/addauthorroutes")(nav);
app.use(express.static("./public"));
app.use("/books",booksrouter);
app.use("/authors",authorsrouter);
app.use("/login",loginrouter);
app.use("/signup",signuprouter);
app.use("/addbooks",addbookrouter);
app.use("/addauthors",addauthorrouter);
app.set("view engine","ejs");
app.set("views","./src/views");

app.get("/",function(req,res){
    res.render("index",
    {
        nav,
    });
});
app.listen(port,()=>{
    console.log("server is ready at port "+port)
});