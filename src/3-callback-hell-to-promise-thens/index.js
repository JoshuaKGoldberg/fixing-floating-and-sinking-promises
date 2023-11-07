import fs from "fs";

function main(callback) {
  fs.readFile("./local.txt", function (error, data) {
    if (error) {
      callback(error);
      return;
    }

    const text = data.toString();
    const modified = text + "!";

    fs.writeFile("./local.txt", modified, function (error) {
      if (error) {
        callback(error);
        return;
      }

      callback(null, modified);
    });
  });
}

main(function (error, data) {
  if (error) {
    console.error("Oh no!", error);
  } else {
    console.log("File contents:", data);
  }
});
