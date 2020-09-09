// 모듈을 추출합니다.
var fs = require("fs");
var ejs = require("ejs");
var mysql = require("mysql");
var express = require("express");
var bodyParser = require("body-parser");

var client = mysql.createConnection({
  user: "root",
  password: "1234",
  database: "Company",
});

var app = express();
app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.listen(52273, function () {
  console.log("Server Running at http://127.0.0.1:52273");
});

app.get("/", function (request, response) {
  fs.readFile("list.html", "utf8", function (error, data) {
    client.query("SELECT * FROM products", function (error, results) {
      response.send(
        ejs.render(data, {
          data: results,
        })
      );
    });
  });
});
