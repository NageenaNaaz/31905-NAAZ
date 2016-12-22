var express = require('express');
var router = express.Router();

/*http://localhost:8083/news/*/
router.get('/', function(req, res, next) {
  res.send('WELCOME TO THE NEWS');
  console.log("Welcome Naaz");
});


/*http://localhost:8083/news/*/
router.post('/', function(req, res, next) {
  res.json(req.body);
  console.log(req.body);
});


/*http://localhost:8083/news/*/
router.delete('/', function(req, res, next) {
  res.json(req.body);
  console.log(req.body);
});



/*http://localhost:8083/news/*/
router.put('/', function(req, res, next) {
  res.json(req.body.title);

  console.log(a);

});

module.exports = router;
