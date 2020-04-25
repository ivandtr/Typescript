import { User, UserProps } from './User';
import { Eventing } from './Eventing';
import axios, { AxiosResponse } from 'axios';

export class Collection {
  models: User[] = [];
  events: Eventing = new Eventing();

  constructor(public url: string) {}

  get on() {
    return this.events.on;
  }

  get trigger() {
    return this.events.trigger;
  }

  fetch(): void {
    axios.get(this.url).then((response: AxiosResponse) => {
      response.data.forEach((user: UserProps) => {
        this.models.push(User.buildUser(user));
      });
    });

    this.trigger('change');
  }
}
