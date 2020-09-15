// 모듈을 추출합니다.
var http = require("http");
var fs = require("fs");
var socketio = require("socket.io");

// 웹서버를 생성합니다.
var server = http
  .createServer(function (request, response) {
    // HTMLPage.html 파일을 읽습니다.
    fs.readFile("HTMLPage.html", function (error, data) {
      response.writeHead(200, { "Content-Type": "text/html " });
      response.end(data);
    });
  })
  .listen(52273, function () {
    console.log("Server running at http://127.0.0.1:52273");
  });

// 소켓 서버를 생성 및 실행합니다.
var io = socketio.listen(server);
io.sockets.on("conncection", function (socket) {
  // rint 이벤트
  socket.on("rint", function (data) {
    // public 통신
    io.sockets.emit("smart", data);
  });
});
// SET DEBUG=socket.io*
// node socket.io.server
