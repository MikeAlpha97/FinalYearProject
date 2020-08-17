const UserModel=require("../models_yolo/user.js");

exports.Signin=(req,res)=>{
    const user=new UserModel(req.body);
    UserModel.find({email:user.email,password:user.password},(err,docs)=>{
        if(docs.length>0){
            res.json({"msg":"success"});
        }else{
            res.json({"msg":"failure"});
        }
    })
}

exports.Signup=(req,res)=>{
    const user=new UserModel(req.body);
    user.save((err,docs)=>{
        if(!err){
            res.json({"msg":"User Registered"});
        }else{
            res.json({"msg":"Error : "+err})
        }
    })
}

exports.UpdateUser=(req,res)=>{
    const user=new UserModel(req.body);
    UserModel.findOneAndUpdate({ username: user.username },
        { $set: { first_name: user.first_name, last_name: user.last_name, password: user.password } },
        { useFindAndModify: false },(err, docs)=> {
              if (docs) {
                    res.send({ "msg": "success" });
              } else {
                    res.send({ "msg": "failure" });
              }
        });
}

exports.GetUser=(req, res)=>{
    const user=new UserModel(req.body);
    UserModel.findOne({username:user.username},(err,docs)=>{
        if(!err){
            res.json({"msg":docs})
        }else{
            res.json({"msg":"failure"})
        }
    })
}

exports.AddPosts=(req, res)=>{
    // console.log(req.body)
    var post={
        filename:req.body["fileName"],
        caption:req.body["caption"],
        date:new Date()
    }
    // console.log(post)
    // const user=new UserModel(req.body["email"]);
    UserModel.updateOne({ username: req.body["username"] }, { $push: { post: [post] } }, (err, docs) => {
        if (docs) {
            console.log(docs)
            console.log(req.body["username"])
            res.send({ "msg": "success" });
        } else {
            res.send({ "msg": "failure" });
        }
    });
}

exports.GetPosts=(req,res)=>{
    console.log(req.body)
    UserModel.find({username:"" + req.body["username"]},"post",(err,docs)=>{
        if(!err){
            console.log(docs)
            res.json({"msg":docs})
        }else{
            res.json({"msg":err})
        }
    });
}















