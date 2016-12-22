var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport = require('passport');
var LocalStrategy = require('passport-local').Strategy;
var connectflash = require('connect-flash');

var index = require('./routes/index');
var users = require('./routes/users');
var User = require('./model/user');

var news = require('./routes/news');
var sav = require('./routes/sav');
var del = require('./routes/del');
var up = require('./routes/up');
var view = require('./routes/view')
var webpackDevMiddleware = require("webpack-dev-middleware");
var webpack = require("webpack");
var webpackConfig = require("../webpack.config");
var webpackHotMiddleware = require('webpack-hot-middleware');



var app = express();
var compiler = webpack(webpackConfig);



app.use(webpackDevMiddleware(compiler, {
 publicPath: webpackConfig.output.publicPath,
   stats: {colors: true}, // Same as `output.publicPath` in most cases.
   quiet: true,
   noInfo: true,
   host: '0.0.0.0',
   watchOptions:{
     aggregateTimeout:300,
     poll:1000
   }
}));

app.use(webpackHotMiddleware(compiler, {
   log: console.log,
}))


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/database');

var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  // we're connected!
  console.log("mongoose");
});


passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id, function (err, user) {
    done(err, user);
  });
});




passport.use(new LocalStrategy(
 function(username, password, done) {
   console.log("tyyyy");
   process.nextTick(function () {
   User.findOne({'username':username},
   function(err, user) {
     if (err) {console.log("err"); return done(err); }
     if (!user) { 
       console.log("user not");
      return done(null, false); }
     if (user.password != password) { console.log("password");
     return done(null, false); }
console.log("ssssss"+user);
     return done(null, user);
   });
   });
 }
));




// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(require('express-session')({ secret: 'accesskey'}));
app.use(passport.initialize());
app.use(passport.session());


app.use('/', index);
app.use('/users', users);

app.use('/news',news);
app.use('/sav',sav);
app.use('/del',del);
app.use('/up',up);
app.use('/view',view);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});




module.exports = app;
