type Callback = () => void;

export class Eventing {
  events: { [key: string]: Callback[] } = {};

  on = (eventName: string, callback: Callback): void => {
    this.events[eventName]
      ? this.events[eventName].push(callback)
      : (this.events[eventName] = [callback]);
  };

  trigger = (eventName: string): void => {
    const handlers = this.events[eventName];

    if (!handlers || handlers === []) {
      return;
    }

    handlers.forEach((callback) => callback());
  };
}
