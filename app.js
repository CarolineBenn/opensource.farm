var express        = require('express');
var app            = express();
var path           = require('path');
var morgan         = require('morgan');
var bodyParser     = require('body-parser');
var cookieParser   = require('cookie-parser');
var session        = require('express-session')
var methodOverride = require("method-override");
var passport       = require('passport');
var mongoose       = require('mongoose');
var layouts        = require('express-ejs-layouts');
var ejs            = require('ejs');
var config         = require('./config/config');
var secret         = require('./config/config').secret;
var routes         = require('./config/routes'); 

require('./config/passport')(passport);

mongoose.connect(config.database);
console.log(config.database)


app.set('layout', 'layout');
app.set('view engine', 'ejs');
app.use(layouts);
app.set('views', './views');

// view engine setup
app.set('views', path.join(__dirname, 'views'));

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
//app.use(logger('dev'));
app.use(morgan('dev'));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

// Deprecated warning: 
// app.use(session({ secret: 'shhhthisisasesssion' }));

// This will be uncommented once Passport is set up:
 
 app.use(passport.initialize());
 //app.use(passport.session());






// app.use('/', routes);
// app.use('/users', users);


/*
// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

*/
var routes = require(__dirname + '/config/routes');
app.use(routes); 

app.use(express.static(path.join(__dirname, 'public')));


module.exports = app;
