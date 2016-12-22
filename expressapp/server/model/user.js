var mongoose=require('mongoose');

var Schema = mongoose.Schema;

var users=new Schema({
    username: {type:String,unique:true},
    password:String,
});

module.exports=mongoose.model('userscollection',users);
