const fs = require("fs");

function pollUntil(check, complete, interval) {
  function tryAgain() {
    check(function (result) {
      if (result) {
        complete(result);
      } else {
        setTimeout(tryAgain, interval);
      }
    });
  }

  tryAgain();
}

pollUntil(
  function (callback) {
    console.log("Trying...");
    fs.readFile("./local.txt", function (error, data) {
      callback(error ? undefined : data.toString().trim());
    });
  },
  function (text) {
    console.log(`File contents:\n${text}`);
  },
  500,
);
