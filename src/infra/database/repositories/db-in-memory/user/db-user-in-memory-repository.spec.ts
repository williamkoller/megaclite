import { UserEntity } from '@/domain/entities/user/user-entity';
import { DbUserInMemoryRepository } from './db-user-in-memory-repository';
import { AddUserRepositoryNamespace } from '@/data/namespace/db/user/add-user-repository.namespace';

describe('DbUserInMemoryRepository', () => {
  let dbUserInMemoryRepository: DbUserInMemoryRepository;

  beforeEach(() => {
    dbUserInMemoryRepository = new DbUserInMemoryRepository();
  });

  it('should add a new user to the repository', async () => {
    const userData: AddUserRepositoryNamespace.Params = {
      name: 'John',
      surname: 'Doe',
      email: 'john.doe@example.com',
      password: 'securePassword123',
    };

    const user = await dbUserInMemoryRepository.add(userData);

    expect(user).toBeInstanceOf(UserEntity);
    expect(user.name).toBe(userData.name);
    expect(user.surname).toBe(userData.surname);
    expect(user.email).toBe(userData.email);
    expect(user.password).toBe(userData.password);
  });
});
