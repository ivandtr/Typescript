import { User, UserProps } from '../models/User';
import { View } from './View';
import { Model } from '../models/Model';

export class UserForm extends View<User, UserProps> {
  eventsMap(): { [key: string]: () => void } {
    return {
      'click:.set-age': this.onSetAgeClick,
      'click:.set-name': this.onSetNameClick,
    };
  }

  onSetNameClick = (): void => {
    const input = this.parent.querySelector('input');
    if (input) {
      const name = input.value;
      this.model.set({ name });
    }
  };
  onSetAgeClick = (): void => {
    this.model.setRandomAge();
  };

  template(): string {
    return `
      <div>
        <h1>User Form</h1>
        <div>User name: ${this.model.get('name')}
        <div>User name: ${this.model.get('age')}
        <input />
        <button class="set-name">Change name</button>
        <button class="set-age">Set random age</button>
      </div>
    `;
  }
}
