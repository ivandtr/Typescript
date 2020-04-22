interface UserProps {
  name?: string;
  age?: number;
}
export class User {
  constructor(private data: UserProps) {}

  get(userProp: string): number | string {
    return this.data[userProp];
  }

  set(update: UserProps): void {
    Object.assign(this.data, update);
  }
}
