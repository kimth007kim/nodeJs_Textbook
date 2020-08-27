var crypto = require("crypto");

var key = "아무도 알지 못하는 나만의 비밀 키";
var input = "PASSWORD";

//암호화
var cipher = crypto.createCipher("aes192", key);
cipher.update(input, "utf8", "base64");
var cipheredOutput = cipher.final("base64");

//암호화 해제

var decipher = crypto.createDecipher("aes192", key);
decipher.update(cipheredOutput, "base64", "utf8");
var decipheredOutput = decipher.final("utf8");

console.log("원래 문자열: " + input);
console.log("암호화: " + cipheredOutput);
console.log("암호화 해제:" + decipheredOutput);
