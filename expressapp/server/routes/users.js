var express = require('express');
var router = express.Router();
var user = require('../model/user');
var passport = require('passport');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});



router.post('/login',passport.authenticate('local',{failureRedirect:'/login'}),
  function(req,res){
    res.send("welcome to login"+req.user);
  }
)
router.post("/add",function(req,res) {
   if(req.body)
   {
     var uservar=new user();
     console.log(uservar);
     uservar.username=req.body.username;
     uservar.password=req.body.password;
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
