// morgan 미들웨어는 웹 요청이 들어왔을 때 로그를 출력하는 미들웨어이다.
// 외부모듈이므로 설치해야한다.

// 모듈을 추출한다.
var express = require("express");
var morgan = require("morgan");

// 서버를 생성합니다.
var app = express();

// 미들웨어를 설정합니다.
app.use(morgan("short"));
app.use(function (request, response) {
  response.send("<h1>express Basic</h1>");
});

// 서버를 실행합니다.
app.listen(52273, function () {
  console.log("Server running at http://127.0.0.1:52273");
});
