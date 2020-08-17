const express = require('express');
// create new express app and save it as "app"
const app = express();
// server configuration
const PORT = 8080;
const bodyparser=require('body-parser');
const multer = require('multer');
const path = require("path");
const fs = require("fs");
const userRoutes=require("./routes/routes.js");
// app.use('/generated',express.static('generated'));

const db=require("./db/db.js");
app.use(bodyparser.json())
app.use('/uploads', express.static('uploads'));

app.use("/user",userRoutes.routes);

var storage = multer.diskStorage({
      destination: function (req,file,next) {
      next(null,"./uploads");
  },
  filename: function (req,file,next) {
        next(null,file.originalname);
  }
});

var upload = multer({storage:storage});

//use body parser for post form and json requests
// app.use(express.urlencoded({ extended: true })); 
// app.use(express.json());

// create a route for the app
var myLogger = function (req, res, next) {

  console.log("[LOG]  Recived URL : "+req.url);
  // console.log(req.url.body);

  next();
};

app.use(myLogger);

app.get('/testLink' , (req,res)=>{
  res.json({data:'got It'})
});

app.post('/upload',upload.single("file"),(req,res) => {




  var exec = require("child_process").exec; 
    //running python script
    console.log("Processing Started");
    exec(`C:\\ProgramData\\Anaconda3\\python.exe sample.py --image uploads\\${req.file.filename}`,function(err,stdout,stderr){
      if(err){
          console.log(err);
          res.json({success:false})
          return;
      }
      var caption;
      fs.readFile("test.txt", 'utf8', function(err, data) {
        if (err) throw err;
        caption=data;
        res.json({success:true,"caption":caption})
      });
     console.log("Processing Finished");

      // console.log(`[INFO] File recived and its name is set to : ${req.file.filename}`);
      // res.sendStatus = 201; //status for file created
      
      
    });

});

//for testing file submittion
app.get("/",(req,res)=>{
    res.send(`<form action="/upload" method="POST" enctype="multipart/form-data">
    <input type="text" name="text" >
    <input type="file" name="file"/>
    <input type="submit">
   </form>`
    );
});

//getting request for generated file
app.get("/get-img/:imgname",(req,res) => {
  //sending the file to server
  console.log("[INFO] Sending file" +path.join(__dirname,"generated",req.params.imgname.substr(1)));
  res.sendFile(path.join(__dirname,"generated",req.params.imgname.substr(1)));
});


// make the server listen to requests
app.listen(PORT, () => { 
  console.log(`Server running at: http://localhost:${PORT}/`);
});