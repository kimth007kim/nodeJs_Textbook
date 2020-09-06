// express 모듈은 페이지 라우팅을 지원합니다.
// 페이지 라우팅 기능은 express 모듈에 내장되어있는 미들웨어의 기능이다

// 모듈을 추출합니다.
var express = require("express");

// 서버를 생성합니다.
var app = express();

// 라우터를 설정합니다.
app.get("/a", function (request, response) {
  response.send('<a href="/b">Go to B</a>');
});
app.get("/b", function (request, response) {
  response.send('<a href="/a">Go to A</a>');
});

// 서버를 실행합니다.
app.listen(52273, function () {
  console.log("Server running at http://127.0.0.1:52273");
});
