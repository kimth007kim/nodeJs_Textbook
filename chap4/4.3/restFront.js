function getUser() {
  var xhr = new XMLHttpRequest();
  xhr.onload = function () {
    if (xhr.status === 200) {
      var users = JSON.parse(xhr.responseText);
      var list = document.getElementById("list");
      list.innerHTML = "";
      Object.keys(users).map(function (key) {
        var userDiv = document.createElement("div");
        var span = document.createElement("span");
        span.textContent = users[key];
        var edit = document.createElement("button");
      });
    }
  };
}
