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
const nav1 = 
[
    {
        link:"/login",name:"login"
    },
    {
        link:"/signup",name:"signup"
    },
   
];
const nav2 = 
[
   
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
    },
    {
        link:"/logout",name:"logout"
    }
];
const nav3 = 
[
   
    {
        link:"/books",name:"books"
    },
    {
        link:"/authors",name:"authors"
    },
    
    {
        link:"/logout",name:"logout"
    }
];

const booksrouter = require("./src/routes/bookRoutes")(nav3);
const authorsrouter = require("./src/routes/authorRoutes")(nav3);
const loginrouter = require("./src/routes/loginroutes")(nav);
const signuprouter = require("./src/routes/signuproutes")(nav3);
const addbookrouter = require("./src/routes/addbookroutes")(nav2);
const addauthorrouter = require("./src/routes/addauthorroutes")(nav2);
const updatebookrouter = require("./src/routes/updatebookroutes")(nav2);
const deletebookrouter = require("./src/routes/deletebookroutes")(nav2);
const updateauthorrouter = require("./src/routes/updateauthorroutes")(nav2);
const deleteauthorrouter = require("./src/routes/deleteauthorroutes")(nav2);
app.use(express.urlencoded({extended:true}));
app.use(express.static("./public"));

app.use("/books",booksrouter);
app.use("/authors",authorsrouter);
app.use("/login",loginrouter);
app.get("/logout",function(req,res){
   
    res.redirect("/login");
});

app.use("/signup",signuprouter);
app.use("/addbooks",addbookrouter);
app.use("/addauthors",addauthorrouter);
app.use("/updatebook",updatebookrouter);
app.use("/deletebook",deletebookrouter);
app.use("/updateauthor",updateauthorrouter);
app.use("/deleteauthor",deleteauthorrouter);


app.set("view engine","ejs");
app.set("views","./src/views");

app.get("/",function(req,res){
    res.render("index",
    {
        nav1,
    });
});
app.listen(port,()=>{
    console.log("server is ready at port "+port)
});