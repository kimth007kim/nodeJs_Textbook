// 모듈을 추출합니다.
var http = require("http");
var fs = requrie("fs");
var url = require("url");

// 서버를 생성 및 실행합니다.

http
  .createServer(function (request, response) {})
  .listen(52273, function () {
    console.log("Server Running at http://127.0.0.1:52273");
  });
