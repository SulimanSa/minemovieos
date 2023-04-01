const mongoose = require("mongoose");

const Schema = mongoose.Schema;

let userSchema = new Schema(
  {
    username: {
        type:String,
        unique:true,
        required : true 
    },
    FirstName:{
        type:String,
        required:true
      },
    LastName:{
        type:String,
        required:true
      },
    Country:{
       type:String,
        required:true
    },
    City:{
        type:String,
        required:true
    },
    email:{
     type:String,
     unique:true,
     required : true  
    },
    password:{
        type:String,
        required : true 
    },
      uniqueString:{
        type:String,
        required : true 
    },
      isValid:{
        type:Boolean,
        required : true 
    },
        ischeck:{
        type:Boolean,
        required : true 
    },
    img:{
        type:Buffer,
        required : true 
    },
    imgtype:{
      type:String,
      required : true 
  }
  },
  { collection: "User"}
);

module.exports = mongoose.model("user", userSchema);
