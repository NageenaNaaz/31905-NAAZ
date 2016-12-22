var express = require('express');
var router = express.Router();
var sav = require('../model/sav');
//var user = require('../model/user');

router.put("/update",function(req,res)
{
  var tit=req.body.title;
  var com=req.body.comment;
  if(req.body)
  {
      sav.update({title:tit},{$set:{comment:com}},function(err)     {
        if(err) {
          console.log("Heloo");
          res.send(err);
        }
        else  {
          console.log("Heloo in else");
        res.send("updated");
        }
      });
  
  }
});


module.exports = router;
