// 모듈을 추출합니다.
var express = require("express");

// 서버를 생성합니다.
var app = express();

// 미들웨어를 설정합니다.
app.use(function (request, response) {
  //User-Agent 속성을 추출합니다.
  var agent = request.header("User-Agent");
  console.log(request.headers);
  console.log(agent);

  //   응답합니다.
  // 상태 코드를 보낼때는 sendStatus() 메서드를 사용합니다.
  response.sendStatus(200);
});

// 서버를 실행합니다.
app.listen(52273, function () {
  console.log("Server running at http://127.0.0.1:52273");
});
