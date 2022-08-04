import { User } from './../../user/user.entity';

export default class TestUtil {
  static giveMeAValidUser(): User {
    const user = new User();
    user.id = '1';
    user.name = 'Artie Valid';
    user.email = 'valid@gmail.com';
    return user;
  }
}
