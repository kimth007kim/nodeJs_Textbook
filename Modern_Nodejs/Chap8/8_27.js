// 모듈을 추출합니다.
var fs = require("fs");
var express = require("express");
var multipart = require("connect-multiparty");

// 서버를 생성합니다.
var app = express();

// 미들웨어를 설정합니다.
app.use(multipart({ uploadDir: __dirname + "/multipart" }));

// 라우터를 설정합니다.
app.get("/", function (request, response) {
  fs.readFile("HTMLPage.html", function (error, data) {
    response.send(data.toString());
  });
});

app.post("/", function (request, response) {
  // 변수를 선언합니다.
  var comment = request.body.comment;
  var imageFile = request.files.image;

  if (imageFile && imageFile.size > 0) {
    //   변수를 선언합니다.
    var name = imageFile.name;
    var path = imageFile.path;
    var type = imageFile.type;

    // 이미지파일 확인
    if (type.indexOf("image") != -1) {
      // 이미지 파일의 경우: 파일 이름을 변경합니다.
      var outputPath = __dirname + "/multipart" + Date.now() + "_" + name;
      fs.rename(path, outputPath, function (error) {
        response.redirect("/");
      });
    } else {
      // 이미지 파일이 아닌경우: 파일을 제거합니다.
      fs.unlink(path, function (error) {
        response.sendStatus(400);
      });
    }
  } else {
    //   파일이 없을 경우
    response.sendStatus(404);
  }
});

// 서버를 실행합니다.
app.listen(52273, function () {
  console.log("Server running at http://127.0.0.1:52273");
});
