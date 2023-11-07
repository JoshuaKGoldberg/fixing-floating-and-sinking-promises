import fs from "fs/promises";

async function readAndWriteFile(fileName) {
    const data = await fs.readFile(fileName);
    const modified = data.toString() + "!";

    await fs.writeFile(fileName, modified);

    return modified;
}

async function main() {
    try {
        const result = await readAndWriteFile("./local.txt");
        console.log("Done:", result.toString());
    } catch (error) {
        console.error("Oh no:", error);
    }
}

main();
