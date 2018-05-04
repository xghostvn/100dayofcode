var express = require('express');
var app = express();

app.listen(3000);



//middleware  ham next => goi ham middleware tiep theo 
app.use((req,res,next)=>{
    console.log('123');
    next();
});




app.use("/test",(req,res,next) => {
    console.log('123123123');
   
});

app.get('/',(req,res) => {
    res.send('123');
});

//middleware
app.use('/user',(req,res,next) => {
    console.log('Request URL : ' ,req.originalUrl);
    next();
},(req,res,next)=>{
    console.log('Request Type : ',req.method);
    next();
});



let cb=function(res,req,next){
 
    console.log('123456');
    next();

}

app.use('/test1',cb);

app.get('/:id',(req,res)=>{

    var i= req.params.id;

    res.send("<h1 style='color:red'>So nhan dc la  : </h1>" + i);

}); // truyen tham so 


console.log('123123');


