export interface Task<Value> {
  id: string;
  run: () => Promise<Value>;
}

export class AsyncQueue {
  #bandwidth: number;

  constructor(bandwidth: number) {
    this.#bandwidth = bandwidth;
  }

  add<Value>(task: Task<Value>) {
    // TODO: Limit to bandwidth?
    return task.run();
  }
}
