import * as fs from "fs/promises";

const fileName = "local.txt";

// Your code here!

process.openStdin().on("data", (chunk) => {
    const letters = chunk.toString().trim().split("");
    console.log(`About to write ${letters.length} letter(s) to ${fileName}...`);

    for (let i = 0; i < letters.length; i += 1) {
        fs.appendFile(fileName, `${i}: ${letters[i]}\n`);
    }

    console.log("At this point, the letters might note have been written yet...")

    // Your code here!

    console.log("At this point, the letters have been written! Yay!")

});

console.log(`Type letters to add per-line to ${fileName}, then enter to save.`);
