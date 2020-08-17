const mongoose =require("mongoose");

mongoose.connect("mongodb://localhost:27017/captionit",(error)=>{
    if(!error){
        console.log("DB Connected");
    }else{
        console.log("Error");
    }
});

module.exports=mongoose;