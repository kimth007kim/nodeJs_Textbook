// 모듈을 추출합니다.
var fs = require("fs");
var ejs = require("ejs");
var mysql = require("mysql");
var express = require("express");
var bodyParser = require("body-parser");

// 데이터베이스를 연결합니다.
var client = mysql.createConnection({
  user: "root",
  password: "1234",
  database: "Company",
});

// 서버를 생성합니다.
var app = express();
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// 서버를 실행합니다.
app.listen(52273, function () {
  console.log("server running at http://127.0.0.1:52273");
});

// 라우트를 수행합니다.
app.get("/", function (request, response) {});
app.get("/delete/:id", function (request, response) {});
app.get("/insert", function (request, response) {});
app.post("/insert", function (request, response) {});
app.get("/edit/:id", function (request, response) {});
app.post("/edit/:id", function (request, response) {});
