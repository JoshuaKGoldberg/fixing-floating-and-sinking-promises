import * as fs from "fs/promises";

const fileName = "local.txt";

let pending = Promise.resolve();

process.openStdin().on("data", async (chunk) => {
    const letters = chunk.toString().trim().split("");
    console.log(`About to write ${letters.length} letter(s) to ${fileName}...`);

    for (let i = 0; i < letters.length; i += 1) {
        pending = pending.then(() => fs.appendFile(fileName, `${i}: ${letters[i]}\n`));
    }

    console.log("At this point, the letters might note have been written yet...")

    await pending;

    console.log("At this point, the letters have been written! Yay!")

});

console.log(`Type letters to add per-line to ${fileName}, then enter to save.`);
