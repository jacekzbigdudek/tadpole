const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');

// Replace these placeholders with actual project related routes:
const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const otherRouter = require('./routes/other');

// Create the main application object:
const app = express();


// Set up mongo connection:
mongoose.set('strictQuery', false);
mongoose.connect("mongo://localhost:21017/")



// Setup the view engine: 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Register middleware functions:
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

// Register route handlers:
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/other', otherRouter);

// catch 404 and forward to error handler:
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler:
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
