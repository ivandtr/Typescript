import { UserList } from './views/UserList';
import { Collection } from './models/Collection';
import { UserProps, User } from './models/User';

const users = new Collection(
  'http://localhost:3000/users',
  (json: UserProps) => {
    return User.buildUser(json);
  }
);
users.on('change', () => {
  const root = document.getElementById('root');
  if (root) {
    const list = new UserList(root, users);
    // console.log(list);
    list.render();
  }
});

users.fetch();

// import { User } from './models/User';
// import { UserEdit } from './views/UserEdit';

// const user = User.buildUser({ name: 'Ivan', age: 32 });
// const root = document.getElementById('root');
// if (root) {
//   const userEdit = new UserEdit(root, user);
//   // console.log(userEdit);
//   userEdit.render();
//   // console.log(userEdit);
// } else {
//   throw new Error('Root element not found');
// }
