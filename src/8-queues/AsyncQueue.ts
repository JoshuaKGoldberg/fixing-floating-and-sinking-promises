export interface Task {
  id: string;
  run: () => Promise<void>;
}

export class AsyncQueue {
  #bandwidth: number;

  constructor(bandwidth) {
    this.#bandwidth = bandwidth;
  }

  add(task: Task) {
    // TODO: Limit to bandwidth?
    task
      .run()
      .catch((error) =>
        console.error(`Caught error in task ${task.id}:`, error)
      );
  }
}
