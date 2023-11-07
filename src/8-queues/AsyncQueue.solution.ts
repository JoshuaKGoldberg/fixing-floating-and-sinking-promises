export interface Task {
  id: string;
  run: () => Promise<void>;
}

export class AsyncQueue {
  #bandwidth: number;
  #running = 0;
  #pending: Task[] = [];

  constructor(bandwidth) {
    this.#bandwidth = bandwidth;
  }

  add(task: Task) {
    if (this.#running > this.#bandwidth) {
      this.#pending.push(task);
    } else {
      this.#run(task);
    }
  }

  #run(task: Task) {
    this.#running += 1;

    task
      .run()
      .catch((error) =>
        console.error(`Caught error in task ${task.id}:`, error)
      )
      .finally(() => {
        this.#running -= 1;
        this.#runNext();
      });
  }

  #runNext() {
    const next = this.#pending.pop();

    if (next) {
      this.#run(next);
    }
  }
}
