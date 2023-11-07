import { AsyncQueue } from "./AwaitableQueue.js";

async function longTask(delay: number, value: string) {
  await new Promise((resolve) => setTimeout(resolve, delay));
  return value;
}

const queue = new AsyncQueue(2);

for (const [delay, value] of [
  [1000, "a"],
  [2000, "b"],
  [3000, "c"],
  [1000, "d"],
  [2000, "e"],
  [3000, "f"],
  [1000, "g"],
] as const) {
  queue
    .add({
      id: value,
      run: () => longTask(delay, value),
    })
    .then((result) => console.log("Done with", result));
}
