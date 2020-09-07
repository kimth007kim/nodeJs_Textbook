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
    cookie: {
      maxAge: 60 * 1000,
    },
  })
);

app.use(function (request, response) {
  // 세션을 저장합니다.
  request.session.now = new Date().toUTCString();

  // 응답합니다.
  response.send(request.session);
});

// 서버를 실행합니다.
app.listen(52273, function () {
  console.log("Server running at http://127.0.0.1:52273");
});
