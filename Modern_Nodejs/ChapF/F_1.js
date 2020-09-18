// 데이터베이스에 연결합니다.
var mongojs = require("mongojs");
var db = mongojs("node", ["products"]);
// 첫번째 매개변수는 데이터베이스 이름
// 두번째 매개변수는 사용하고자하는 컬렉션
