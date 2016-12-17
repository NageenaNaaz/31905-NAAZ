var express = require('express');
var router = express.Router();
var sav = require('../model/sav');
router.delete('/delete',function(req,res)
{
    if(req.body)
    {
      var usertitle=req.body.title;
      sav.remove({title:usertitle},function(err)
      {
        if(err) {
          res.send(err);
        }
        else  {
        res.send("Deleted");
        }
      });
    }

});

module.exports = router;
