import { Test, TestingModule } from '@nestjs/testing';
import { Connection } from 'mongoose';
import { User } from '../entities/user.entity';
import { UsersController } from '../users.controller';
import { UsersService } from '../users.service';
import { getModelToken } from '@nestjs/mongoose';

describe('UsersController', () => {
  let controller: UsersController;

  const mockUsersService = {};

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UsersController],
      providers: [
        UsersService,
        { provide: Connection, useValue: {} },
        { provide: getModelToken(User.name), useValue: {} },
      ],
    }).compile();

    controller = module.get<UsersController>(UsersController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
