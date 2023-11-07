export interface Task<Value> {
  id: string;
  run: () => Promise<Value>;
}

type TaskResolve<Value = unknown> = (value: Value | PromiseLike<Value>) => void;

interface PendingTask<Value = unknown> {
  resolve: TaskResolve<Value>;
  task: Task<Value>;
}

export class AsyncQueue {
  #bandwidth: number;

  #pendingTasks: PendingTask[] = [];

  #running = new Set<Promise<unknown>>();

  constructor(bandwidth: number) {
    this.#bandwidth = bandwidth;
  }

  add<Value>(task: Task<Value>) {
    return this.#running.size < this.#bandwidth
      ? this.#run(task)
      : this.#enqueue<Value>(task);
  }

  #enqueue<Value>(task: Task<Value>) {
    return new Promise<Value>((resolve) => {
      this.#pendingTasks.push({
        task,
        resolve,
      } as PendingTask<unknown>);
    });
  }

  #run<Value>(run: Task<Value>) {
    const runner = run.run();

    this.#running.add(runner);

    runner.finally(() => {
      this.#running.delete(runner);
      this.#runNext();
    });

    return runner;
  }

  #runNext() {
    const next = this.#pendingTasks.shift();
    if (!next) {
      return;
    }

    const { resolve, task } = next;

    return this.#run(task).then((value) => resolve(value));
  }
}
