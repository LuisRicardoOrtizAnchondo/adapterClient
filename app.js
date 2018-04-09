var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
const multicapa = require('multicapaRichiModule');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
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
console.log('App corriendo!');
console.log(multicapa);
//console.log(obj);
multicapa.printMsg();
//multicapa.getUsers();
//multicapa.getProducts();
let obj = new Object();
let idArticulo = '000';
let pasillo = 0;
obj = {'idArticulo': idArticulo,'nombre': 'comida presentacion (costillas)', 'precio': 200, 'image': 'https://engorda.org/wp-content/uploads/2017/06/engordan-costillas.jpg', 'pasillo': pasillo};
//console.log(obj);
//multicapa.postProducts(obj);

module.exports = app;
