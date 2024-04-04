const mongoose=require('mongoose');
const userSchema=new mongoose.Schema({
uname:{
  type:String,
  required:true,
  unique:true
},
password:{
  type:String,
  required:true
}
});

module.exports={Admin:mongoose.model("Users",userSchema)};