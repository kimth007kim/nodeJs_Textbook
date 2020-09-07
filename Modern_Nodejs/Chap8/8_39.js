// 모듈을 추출합니다.
var fs = require("fs");
var express = require("express");
var bodyParser = require("body-parser");

// 더미 데이터베이스를 구현합니다.
var DummyDB = (function () {
  // 변수를 선언합니다.
  var DummyDB = {};
  var storage = [];
  var count = 1;

  // 메서드를 구현합니다.
  DummyDB.get = function (id) {
    if (id) {
      // 변수를 가공합니다.
      id = typeof id == "string" ? Number(id) : id;

      // 데이터를 선택합니다.
      for (var i in storage)
        if (storage[i].id == id) {
          return storage[i];
        }
    } else {
      return storage;
    }
  };
  DummyDB.insert = function (data) {
    data.id = count++;
    storage.push(data);
    return data;
  };
  DummyDB.remove = function (id) {
    // 변수를 가공합니다.
    id = typeof id == "string" ? Number(id) : id;

    // 제거합니다.
    for (var i in storage)
      if (storage[i].id == id) {
        // 데이터를 제거합니다.
        storage.splice(i, 1);

        // 리턴합니다: 데이터 삭제 성공
        return true;
      }

    // 리턴합니다: 데이터 삭제 실패
    return false;
  };
  // 리턴합니다.
  return DummyDB;
})();

// 서버를 생성합니다.
var app = express();

// 미들웨어를 생성합니다.
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

// 라우터를 설정합니다.
app.get("/user", function (request, response) {
  response.send(DummyDB.get());
});
app.get("/user/:id", function (request, response) {
  response.send(DummyDB.get(request.params.id));
});
app.post("/user", function (request, response) {});
app.put("/user/:id", function (request, response) {});
app.delete("/user/:id", function (request, response) {});

// 서버를 실행합니다.
app.listen(52273, function () {
  console.log("Server running at http://127.0.0.1:52273");
});
