var http = require("http");
var cookie = require("cookie");
http
  .createServer(function (request, response) {
    var cookies = {};
    if (request.headers.cookie !== undefined) {
      console.log(request.headers.cookie);
      cookies = cookie.parse(request.headers.cookie);
    }
    console.log(cookies);
    response.writeHead(200, {
      "Set-Cookie": [
        "yummy_cookie=choco",
        "tasty_cookie=strawberry",
        `Permanent=cookies; Max-Age=${60 * 60 * 24 * 30}`,
        "Secure=Secure; Secure",
        "HttpOnly=HttpOnly; HttpOnly",
        "Path=Path; Path=/cookie",
        "Domain=Domain; Domain=02.org",
      ],
    });
    response.end("Cookie!!");
  })
  .listen(3000);
