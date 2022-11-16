import { User } from '../../entities/user.entity';

export const userStub = (): User => {
  return {
    firstname: 'tester',
    lastname: 'test',
    email: 'test@example.com',
  };
};
