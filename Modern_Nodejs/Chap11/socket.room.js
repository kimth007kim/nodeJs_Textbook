// 모듈을 추출합니다.
var fs = require("fs");

// 서버를 생성합니다.
var server = require("http").createServer();
var io = require("socket.io").listen(server);

// 서버를 실행합니다.
server.listen(52273, function () {
  console.log("Server Running at http://127.0.0.1:52273");
});

// 웹 서버 이벤트를 연결합니다.
server.on("request", function (request, response) {
  // HTMLPage1.html 파일을 읽습니다.
  fs.readFile("HTMLPage1.html", function (error, data) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.end(data);
  });
});

// 소켓 서버 이벤트를 연결합니다.
io.sockets.on("connection", function (socket) {
  // 방 이름을 저장할 변수
  var roomName = null;

  //   join 이벤트
  socket.on("join", function (data) {
    roomName = data;
    socket.join(data);
  });

  //   message 이벤트
  socket.on("message", function (data) {
    io.sockets.in(roomName).emit("message", "test");
  });
});
