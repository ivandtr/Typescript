import { User } from './models/User';

const user2 = new User({ id: 1 });

user2.on('change', () => {
  console.log(user2);
});

user2.fetch();
