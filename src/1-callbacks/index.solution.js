var fs = require("fs");

fs.readFile("./local.txt", function (error, data) {
  if (error) {
    console.error(error);
    process.exitCode = 1;
    return;
  }

  var text = data.toString();

  console.log("File contents:", text);
});
