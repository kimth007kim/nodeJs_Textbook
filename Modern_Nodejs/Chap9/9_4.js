// 모듈을 추출합니다.
var mysql = require("mysql");

// 데이터베이스와 연결합니다.

var client = mysql.createConnection({
  user: "root",
  password: "1234",
});

// 데이터베이스 쿼리를 사용합니다.
client.query("USE Company");
client.query("SELECT * FROM products", function (error, result, fields) {});
