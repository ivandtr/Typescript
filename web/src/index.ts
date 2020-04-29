import { User } from './models/User';
import { UserEdit } from './views/UserEdit';

const user = User.buildUser({ name: 'Ivan', age: 32 });
const root = document.getElementById('root');
if (root) {
  const userEdit = new UserEdit(root, user);
  // console.log(userEdit);
  userEdit.render();
  // console.log(userEdit);
} else {
  throw new Error('Root element not found');
}
