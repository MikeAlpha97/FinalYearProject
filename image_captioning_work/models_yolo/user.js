const mongoose =require("mongoose");

var Schema=mongoose.Schema;

var UserSchema=new Schema({
    id:Schema.ObjectId,
    username:{
        type:String,
        required:true,
        unique:true
    },
    first_name:{
        type:String,
        required:true
    },
    last_name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    post :[
        // {
        //     image:{
        //         type:String,
        //         required:true
        //     },
        //     caption:{
        //         type:String,
        //         required:true
        //     },
        //     date:{
        //         type:Date,
        //         default:Date.now
        //     }
        // }
    ]
});

module.exports=mongoose.model("user",UserSchema);