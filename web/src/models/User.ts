interface UserProps {
  name?: string;
  age?: number;
}
type Callback = () => void;

export class User {
  events: { [key: string]: Callback[] } = {};

  constructor(private data: UserProps) {}

  get(userProp: string): number | string {
    return this.data[userProp];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }

  on(eventName: string, callback: Callback): void {
    this.events[eventName]
      ? this.events[eventName].push(callback)
      : (this.events[eventName] = [callback]);
  }

  trigger(eventName: string): void {
    const handlers = this.events[eventName];

    if (!handlers || handlers === []) {
      return;
    }

    handlers.forEach((callback) => callback());
  }
}

// const handlers = this.events[eventName] || [];
// handlers.push(callback);
// this.events[eventName] = handlers;
