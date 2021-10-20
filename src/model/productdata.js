const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/library");
mongoose.connect("mongodb+srv://userone:userone@fsdfiles.fneg2.mongodb.net/shoppingapp?retryWrites=true&w=majority");

const Schema = mongoose.Schema;
const productSchema = new Schema({
   name : String,
    quality : String,
    quantity : String,
    image : String
});
var productdata = mongoose.model("productdata",productSchema);
module.exports = productdata;