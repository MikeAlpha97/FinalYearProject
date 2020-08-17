var exec = require("child_process").exec; 
exec("C:/ProgramData/Anaconda3/python.exe yolo.py -i uploads\\example_01.jpg",function(err,stdout,stderr){
    if(err){
        console.log(err);
        return;
    }
}); 