var express = require('express');
var router = express.Router();
var sav = require('../model/sav');
//var user = require('../model/user');

router.put("/update",function(req,res)
{
  var tit=req.body.title;
  var des=req.body.description;
  if(req.body)
  {
      sav.update({title:tit},{$set:{description:des}})
      {
        if(err) {
          res.send(err);
        }
        else  {
        res.send("updated");
        }
      }
  }
});


module.exports = router;
