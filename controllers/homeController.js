exports.index=function(req,res,next){
        res.render('index',{title : 'Express'});
}

var Member=require('../models/member');