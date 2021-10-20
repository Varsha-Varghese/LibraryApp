const express = require("express");
const app = new express();
const port = process.env.PORT || 5000;
const nav = 
[
   
    {
        link:"/products",name:"products"
    },
    
    {
        link:"/addproducts",name:"Add product"
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

const productsrouter = require("./src/routes/productRoutes")(nav);

const loginrouter = require("./src/routes/loginroutes")(nav);
const signuprouter = require("./src/routes/signuproutes")(nav);
const addproductrouter = require("./src/routes/addproductroutes")(nav);

app.use(express.urlencoded({extended:true}));
app.use(express.static("./public"));
app.use("/products",productsrouter);

app.use("/login",loginrouter);
app.use("/signup",signuprouter);
app.use("/addproducts",addproductrouter);

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