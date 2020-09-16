// 모듈을 추출합니다.
var socketio = require("socket.io");
var express = require("express");
var http = require("http");
var fs = require("fs");
// 변수를 선언합니다.

var seats = [
  [1, 1, 0, 1, 1, 0, 0, 0, 0, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
  [1, 1, 0, 1, 1, 1, 1, 1, 1, 1, 1, 0, 1, 1],
];

// 웹서버를 생성합니다.
var app = express();
var server = http.createServer(app);

// 라우트를 수행합니다.
app.get("/", function (request, response, next) {
  fs.readFile("HTMLPage.html", function (error, data) {
    response.send(data.toString());
  });
});

app.get("/seats", function (request, response, next) {
  response.send(seats);
});

// 웹 서버를 실행합니다.
server.listen(52273, function () {
  console.log("Server Running at http://127.0.0.1:52273");
});

// 소켓 서버를 생성 및 실행합니다.
var io = socketio.listen(server);
io.sockets.on("connection", function (socket) {
  socket.on("reserve", function (data) {
    seats[data.y][data.x] = 2;
    io.sockets.emit("reserve", data);
  });
});
