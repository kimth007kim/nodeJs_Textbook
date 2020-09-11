var createError = require("http-errors");
var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");

var app = express();

// view engine setup
//  10_6 URL 요청 대소문자 구분
app.set("case sensitive routes", true);
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "jade");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
var session = require("express-session");
//  10_5 미들웨어 추가
app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
  })
);
app.use(express.static(path.join(__dirname, "public")));

app.use("/", indexRouter);
app.use("/users", usersRouter);

// GET- /
app.get("/", indexRouter);

// GET - /product/
app.get("/product", function (request, response) {
  response.render("product", { title: "Product Page" });
});
// GET - /product/insert
app.get("/product/insert", function (request, response) {
  response.render("product/insert", { title: "Insert Page" });
});
// GET - /product/edit
app.get("/product/edit", function (request, response) {
  response.render("product/edit", { title: "Edit Page" });
});

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
