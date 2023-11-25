var createError = require("http-errors");
var express = require("express");
const cors = require("cors");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/userRoutes");
var teacherRouter = require("./routes/teacherRoutes");
var studentRouter = require("./routes/studentRoutes");
// var courseRouter = require("./routes/courseRoutes");

var app = express();

// view engine setup

app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.options("*", cors());
app.use("/", indexRouter);
app.use("/users", usersRouter);
app.use("/teachers", teacherRouter);
app.use("/students", studentRouter);
// app.use("/courses", courseRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get("env") === "development" ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render("error");
});

module.exports = app;
