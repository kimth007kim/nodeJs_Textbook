// 모듈을 추출합니다.
var express = require("express");
var session = require("express-session");

// 서버를 생성합니다.
var app = express();

// 미들웨어를 설정합니다.
app.use(
  session({
    secret: "secret key",
    resave: false,
    saveUninitialized: true,
  })
);

app.use(function (request, response) {});

// 서버를 실행합니다.
app.listen(52273, function () {
  console.log("Server running at http://127.0.0.1:52273");
});
