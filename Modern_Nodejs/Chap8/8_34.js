// 모듈을 추출합니다.
var fs = require("fs");
var express = require("express");
var bodyParser = require("body-parser");

// 더미 데이터베이스를 구현합니다.
var DummyDB = (function () {})();

// 서버를 생성합니다.
var app = express();

// 미들웨어를 생성합니다.
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// 라우터를 설정합니다.
app.get("/user", function (request, response) {});
app.get("/user/id", function (request, response) {});
app.post("/user", function (request, response) {});
app.put("/user/:id", function (request, response) {});
app.delete("/user/:id", function (request, response) {});

// 서버를 실행합니다.
app.listen(52273, function () {
  console.log("Server running at http://127.0.0.1:52273");
});
