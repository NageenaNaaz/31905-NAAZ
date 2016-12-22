var express = require('express');
var router = express.Router();
var sav = require('../model/sav');

function isLoggedIn(req,res,next){
 console.log("ghh");
if(req.isAuthenticated()){
 console.log("isLoggedIn" + req.user);
return next();
}
else{
 
 console.log("not authenticated");
 res.send("authenticate failed");
 }
}

/*localhost:8141/view/view*/
router.get('/viewall',isLoggedIn, function(req, res) {
  sav.find({},function(err,viewnews){
    if(err) {
      res.send(err);
      console.log('error occured');
    }
    else {
     var newsobject={};
      viewnews.forEach(function(news,ind){
        newsobject[news._id]=news;

      });
      res.send(newsobject);
    }
  });
});

module.exports = router;
