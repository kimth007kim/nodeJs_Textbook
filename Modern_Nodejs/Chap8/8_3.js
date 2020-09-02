// 모듈을 추출합니다.
var http = require("http");
var express = require("express");

// 서버를 생성합니다.
var app = express();

// 서버를 실행합니다.
http.createServer(app).listen(52273, function () {
  console.log("Server running at http://127.0.0.1:52273");
});
