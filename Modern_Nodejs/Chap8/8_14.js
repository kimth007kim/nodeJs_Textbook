// 전체 선택자

// 모듈을 추출합니다.
var express = require("express");

// 서버를 생성합니다.
var app = express();

// 라우터를 설정합니다.
app.get("/index", function (request, response) {
  response.send("<h1>Index Page</h1>");
});

app.all("*", function (request, response) {
  response.status(404).send("<h1>ERROR - Page Not Found</h1>");
});

// 서버를 실행합니다.
app.listen(52273, function () {
  console.log("Server running at http://127.0.0.1:52273");
});
