const mongoose = require("mongoose");
// mongoose.connect("mongodb://localhost:27017/library");
mongoose.connect("mongodb+srv://userone:userone@fsdfiles.fneg2.mongodb.net/shoppingapp?retryWrites=true&w=majority");

const Schema = mongoose.Schema;
const signupSchema = new Schema({
    name : String,
    mobileNo : String,
    email : String,
    password : String
});
var signupdata = mongoose.model("signupdata",signupSchema);
module.exports = signupdata;