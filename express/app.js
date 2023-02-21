const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

// Not sure if we're going to use the ODM layer...
const mongoose = require('mongoose');

// Create main application object:
const app = express();

//---------------------------------------------------------------------------------------------
// This would be a good place to initialize the database at the start of deployment by creating 
// the relevant collections in the database based on configuration files from the project repo.

// Set up mongo connection:
// mongoose.set('strictQuery', false);
// mongoose.connect("mongo://localhost:21017/")







// Setup the view engine: 
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Register middleware functions:
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// The filesystem path specified in the argument to static will get mapped
// to a path (root by default I assume) on the browser.
app.use(express.static(path.join(__dirname, 'public')));

// Import route handlers:
const indexRouter = require("./routes/indexRouter");
const tadpoleRouter = require("./routes/tadpoleRouter");

// Register route handlers:
app.use("/tadpole", tadpoleRouter);
app.use("/", indexRouter);

// catch 404 and forward to error handler:
app.use(function(req, res, next) {
  next(createError(404));
});

// How does app.use differentiate between different callback type registrations?
// Is it based type signature differences?

// Register an error handler. 
app.use(function(err, req, res, next) {
  // set locals, only providing error in development:
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};
  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
