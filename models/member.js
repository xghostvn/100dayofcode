var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var memberSchema = new Schema({
        info : {
            firstname:String,
            lastname : String,
            phone : String
        },
        roles: String,
        status: String
});


module.exports=mongoose.model('Member',memberSchema);