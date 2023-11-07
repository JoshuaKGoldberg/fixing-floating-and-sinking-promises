import fs from "fs/promises";

function main() {
  return fs.readFile("./local.txt").then((data) => {
    const text = data.toString();
    const modified = text + "!";

    return fs.writeFile("./local.txt", modified).then(() => modified);
  });
}

main()
  .then((data) => console.log("File contents:", data))
  .catch((error) => console.error("Oh no!", error));
