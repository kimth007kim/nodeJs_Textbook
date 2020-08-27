//  EventEmitter 객체를 생성합니다.
var EventEmitter = require("events");
exports.timer = new EventEmitter();

// 이벤트를 강제로 발생시킵니다.
setInterval(function () {
  exports.timer.emit("tick");
}, 1000);
