import { User } from './models/User';

const user = new User({ name: 'Ivan', age: 32 });
console.log(user.get('age'));
console.log(user.get('name'));
console.log(user);
user.on('click', () => {
  console.log('click works!!!');
});

user.trigger('click');
