// 모듈을 추출합니다.
var express = require("express");

// 서버를 생성합니다.
var app = express();

// 미들웨어를 설정합니다.
app.use(express.static(__dirname + "/public"));
app.use(function (request, response) {
  // 응답합니다.
  response.writeHead(200, { "Content-Type": "text/html" });
  response.end('<img src="/ayu.jpg" width="100%" />');
});

// 서버를 실행합니다.
app.listen(52273, function () {
  console.log("Server running at http://127.0.0.1:52273");
});

// static 미들웨어를 사용하면 지정한 폴더에 있는 내용을 모두 웹 서버 루트 폴더에 올린다,
