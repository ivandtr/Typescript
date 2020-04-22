import { User } from './models/User';

const user2 = new User({ name: 'Ivan', age: 32 });
// console.log(user.get('age'));

user2.save();
