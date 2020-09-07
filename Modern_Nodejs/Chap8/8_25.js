// 모듈을 추출합니다.
var fs = require("fs");
var express = require("express");
var cookieParser = require("cookie-parser");
var bodyParser = require("body-parser");

// 서버를 생성합니다.
var app = express();

// 미들웨어를 생성합니다.
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: false }));

// 라우터를 설정합니다.
app.get("/", function (request, response) {
  if (request.cookies.auth) {
    response.send("<h1>Login Success</h1>");
  } else {
    response.redirect("/login");
  }
});

app.get("/login", function (request, response) {
  fs.readFile("login.html", function (error, data) {
    response.send(data.toString());
  });
});

app.post("/login", function (request, response) {
  // 쿠키를 생성합니다.
  var login = request.body.login;
  var password = request.body.password;

  // 출력합니다.
  console.log(login, password);
  console.log(request.body);

  // 로그인을 확인합니다.
  if (login == "rint" && password == "1234") {
    // 로그인 성공
    response.cookie("auth", true);
    response.redirect("/");
  } else {
    // 로그인 실패
    response.redirect("/login");
  }
});

// 서버를 실행합니다.
app.listen(52273, function () {
  console.log("Server running at http://127.0.0.1:52273");
});
