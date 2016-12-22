var express = require('express');
var router = express.Router();
var sav = require('../model/sav');
var user = require('../model/user');

router.post("/add1",function(req,res) {
  if(req.body)
  {
    var uservar=new sav();
    console.log(uservar);
    uservar.author=req.body.author;
    uservar.title=req.body.title;
    uservar.description=req.body.description;
    uservar.url=req.body.url;
    uservar.urlToImage=req.body.urlToImage;
    uservar.publishedAt=req.body.publishedAt;
    uservar.comment=req.body.comment;
    uservar.save(function(err){
    if(err) {
      res.send(err);
    }
    else  {
    res.send("inserted");
    }
  });
}
});


module.exports = router;
