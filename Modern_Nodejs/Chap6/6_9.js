var fs = require("fs");
var http = require("http");

// 52273번 포트에 서버를 생성하고 실행한다.
http
  .createServer(function (request, response) {})
  .listen(52273, function () {
    console.log("Server Running at http://127.0.0.1:52273");
  });

// 52274번 포트에 서버를 생성하고 실행한다.
http
  .createServer(function (request, response) {})
  .listen(52274, function () {
    console.log("Server Running at http://127.0.0.1:52274");
  });
