// 모듈을 추출합니다.
var fs = require("fs");
var http = require("http");

// 웹 서버를 생성하고 실행합니다.
http
  .createServer(function (request, response) {})
  .listen(52273, function () {
    console.log("Server Running at http://127.0.01:52273");
  });
