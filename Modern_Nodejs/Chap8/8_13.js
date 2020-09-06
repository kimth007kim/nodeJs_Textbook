// 모듈을 추출합니다.
var express = require("express");

// 서버를 생성합니다.
var app = express();

// 라우터를 설정합니다.
app.get("/page/:id", function (request, response) {
  // 변수를 선언합니다.
  var name = request.params.id;

  //   응답합니다.
  response.send("<h1>" + name + " Page</h1>");
});

// 서버를 실행합니다.
app.listen(52273, function () {
  console.log("Server running at http://127.0.0.1:52273");
});
