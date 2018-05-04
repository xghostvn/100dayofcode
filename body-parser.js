
var express = require('express');
var app = express();
var bodyParser=require('body-parser');


// for parsing application/json
//app.use(bodyParser.json()); 

// for parsing application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: true })); 

// for parsing multipart/form-data
//app.use(multer());


app.get('/',(req,res)=>{



    res.sendFile(__dirname +'/index.html');
});





app.post('/',(req,res)=>{

    res.end(typeof req.body);
});


app.listen(3000);