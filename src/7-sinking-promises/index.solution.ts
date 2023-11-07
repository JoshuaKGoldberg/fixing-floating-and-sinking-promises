import * as fs from "fs/promises";

async function callSafelyAfter(dangerous: () => Promise<void>, delay: number) {
  await new Promise((resolve) => setTimeout(resolve, delay));

  try {
    await dangerous();
  } catch (error) {
    return error instanceof Error ? error : new Error(`${error}`);
  }
}

const error = await callSafelyAfter(async function () {
  console.log("File contents:");
  console.log((await fs.readFile("local.txt")).toString());
}, 100);

if (error) {
  console.error("Oh no:", error);
}

console.log("You did it! You ran the script! Yay! 💖");
