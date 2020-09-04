// 모듈을 추출합니다.
var express = require("express");

// 서버를 생성합니다.
var app = express();

// 미들웨어를 설정합니다.
app.use(function (request, response, next) {
  //   응답합니다.
  response.status(404).send("<h1>ERROR</h1>");
});

// 서버를 실행합니다.
app.listen(52273, function () {
  console.log("Server running at http://127.0.0.1:52273");
});
