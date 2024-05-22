import { AddUserUseCase } from '@/usecases/user/add-user/add-user-usecase';
import { AddUserRepository } from '@/data/protocols/db/user/add-user-repository';
import { AddUserDto } from '@/presentation/http/dtos/user/add-user.dto';
import { UserEntity } from '@/domain/entities/user/user-entity';

describe('AddUserUseCase', () => {
  let addUserUseCase: AddUserUseCase;
  let addUserRepository: AddUserRepository;

  beforeEach(() => {
    addUserRepository = {
      add: jest.fn().mockResolvedValue({
        name: 'John',
        surname: 'Doe',
        email: 'john.doe@example.com',
        password: 'securePassword123',
      }),
    };

    addUserUseCase = new AddUserUseCase(addUserRepository);
  });

  const userData: AddUserDto = {
    name: 'John',
    surname: 'Doe',
    email: 'john.doe@example.com',
    password: 'securePassword123',
  };

  it('should create a user entity and add it using the repository', async () => {
    const userEntity = UserEntity.create(userData);
    const result = await addUserUseCase.execute(userData);

    expect(addUserRepository.add).toHaveBeenCalledWith(userEntity);
    expect(result).toEqual({
      name: 'John',
      surname: 'Doe',
      email: 'john.doe@example.com',
      password: 'securePassword123',
    });
  });
});
