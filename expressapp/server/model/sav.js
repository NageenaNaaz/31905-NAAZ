var mongoose=require('mongoose');

var Schema = mongoose.Schema;
//    ObjectId = Schema.ObjectId;

var BlogPost = new Schema(
  {
    author      : String,
    title      : String,
    description   : String,
    url     : String,
    urlToImage : String,
    publishedAt : String
});

module.exports=mongoose.model('BlogPost',BlogPost);
