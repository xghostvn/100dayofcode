
var express = require('express');
var app = express();
var bodyParser=require('body-parser');


// for parsing application/json
//app.use(bodyParser.json()); 

// for parsing application/x-www-form-urlencoded

//middleware
app.use(bodyParser.urlencoded({ extended: true }));   // su dung body-parser

// for parsing multipart/form-data
//app.use(multer());





app.set('view engine','ejs');
// data = req.body
app.get('/',(req,res)=>{
   res.render(__dirname+'/index.ejs'); 
});


asdasda


app.post('/',(req,res)=>{
    console.log(req.body.abc);
    res.end(typeof req.body.abc);
});


app.listen(3000);



