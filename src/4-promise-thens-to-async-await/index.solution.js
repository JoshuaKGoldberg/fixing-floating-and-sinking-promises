import fs from "fs/promises";

async function main() {
  const data = await fs.readFile("./local.txt");
  const text = data.toString();
  const modified = text + "!";

  await fs.writeFile("./local.txt", modified);

  return modified;
}

main()
  .then((data) => console.log(data))
  .catch((error) => console.error("Oh no!", error));
