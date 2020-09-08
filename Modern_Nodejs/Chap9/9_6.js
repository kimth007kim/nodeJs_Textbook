// createConnection() 메서드의 매개변수로 database 속성을 지정할수 있다.
// 이속성을 지정하면 USE Company 쿼리문장을 사용할 필요가 없다.

// 모듈을 추출합니다.
var mysql = require("mysql");

// 데이터베이스와 연결합니다.
var client = mysql.createConnection({
  user: "root",
  password: "1234",
  database: "company",
});
