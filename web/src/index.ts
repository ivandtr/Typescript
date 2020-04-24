import { User } from './models/User';

const user = new User({ id: 1, name: 'NEW NAME', age: 0 });

user.on('save', () => {
  console.log(user, 'hola que pasa');
});

user.save();
