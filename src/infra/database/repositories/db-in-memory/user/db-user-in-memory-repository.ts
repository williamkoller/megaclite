import { AddUserRepositoryNamespace } from '@/data/namespace/db/user/add-user-repository.namespace';
import { AddUserRepository } from '@/data/protocols/db/user/add-user-repository';
import { UserEntity, UserProps } from '@/domain/entities/user/user-entity';

export class DbUserInMemoryRepository implements AddUserRepository {
  private users: UserEntity[] = [];

  async add(
    data: AddUserRepositoryNamespace.Params,
  ): Promise<AddUserRepositoryNamespace.Result> {
    const userProps: UserProps = {
      name: data.name,
      surname: data.surname,
      email: data.email,
      password: data.password,
    };

    const user = UserEntity.create(userProps);

    this.users.push(user);

    return user;
  }
}
