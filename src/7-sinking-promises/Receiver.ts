export type Handler = (text: string) => void;

export class Receiver {
  #handlers: Map<string, Handler>;

  constructor(args: [string, Handler][]) {
    this.#handlers = new Map(args);
  }

  receive(command: string) {
    const handler = this.#handlers.get(command);

    if (!handler) {
      throw new Error(`Unknown command: ${command}`);
    }

    handler(command);
  }
}
