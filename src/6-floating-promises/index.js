import * as fs from "fs/promises";

const fileName = "local.txt";

process.openStdin().on("data", (chunk) => {
  const letters = chunk.toString().trim().split("");

  for (let i = 0; i < letters.length; i += 1) {
    fs.appendFile(fileName, `${i}: ${letters[i]}\n`);
  }

  console.log(`Wrote ${letters.length} letter(s) to ${fileName}.`);
});

console.log(`Type letters to add per-line to ${fileName}, then enter to save.`);
