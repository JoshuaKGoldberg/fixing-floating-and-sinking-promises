var fs = require("fs");

var text;

fs.readFile("./local.txt", function (error, data) {
  if (error) {
    console.error(error);
    process.exitCode = 1;
    return;
  }

  text = data.toString();
});

console.log("File contents:", text);
