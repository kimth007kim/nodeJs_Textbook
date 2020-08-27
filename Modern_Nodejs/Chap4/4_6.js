var url = require("url");
var queryString = require("querystring");

var parsedObject = url.parse(
  "http://www.hanbit.co.kr/store/books/look.php?p_code=B4250257160"
);
console.log(queryString.parse(parsedObject.query));
