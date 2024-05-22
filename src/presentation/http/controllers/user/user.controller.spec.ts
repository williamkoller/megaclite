import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { AddUserUseCase } from '@/usecases/user/add-user/add-user-usecase';
import { AddUserDto } from '@/presentation/http/dtos/user/add-user.dto';

describe('UserController', () => {
  let userController: UserController;
  let addUserUseCase: AddUserUseCase;

  beforeEach(async () => {
    const moduleRef: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      providers: [
        {
          provide: AddUserUseCase,
          useValue: {
            execute: jest.fn().mockResolvedValue({ id: '123', ...userData }),
          },
        },
      ],
    }).compile();

    userController = moduleRef.get<UserController>(UserController);
    addUserUseCase = moduleRef.get<AddUserUseCase>(AddUserUseCase);
  });

  const userData: AddUserDto = {
    name: 'John',
    surname: 'Doe',
    email: 'john.doe@example.com',
    password: 'securePassword123',
  };

  it('should call addUserUseCase with correct data', async () => {
    const result = await userController.add(userData);
    expect(addUserUseCase.execute).toHaveBeenCalledWith(userData);
    expect(result).toEqual({ id: '123', ...userData });
  });
});
