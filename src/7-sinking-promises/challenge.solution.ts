import * as fs from "fs/promises";

type Task = () => void;

const queue: Task[] = [];

function addToQueue(task: () => void) {
  queue.push(task);
}

async function runAll() {
  await Promise.all(queue.map((task) => task()));
}

for (const letter of ["a", "b", "c", "d", "e", "f", "g"]) {
  addToQueue(async function () {
    fs.appendFile("local.txt", `${letter}\n`);
  });
}

await runAll();

console.log("You did it! You ran the script! Yay! 💖");
