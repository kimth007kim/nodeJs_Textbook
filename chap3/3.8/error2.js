const fs = require("fs");

setInterval(() => {
  fs.unlink("./abcdefg.ks", (err) => {
    if (err) {
      console.log(err);
    }
  });
}, 1000);
