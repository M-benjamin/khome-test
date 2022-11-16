import { userStub } from '../test/stub/user.stub';

export const UserServices = jest.fn().mockReturnValue({
  findOne: jest.fn().mockResolvedValue(userStub()),
  findAll: jest.fn().mockResolvedValue([userStub()]),
  create: jest.fn().mockResolvedValue(userStub()),
  update: jest.fn().mockResolvedValue(userStub()),
  remove: jest.fn().mockResolvedValue(userStub()),
});
