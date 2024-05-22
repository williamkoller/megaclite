import { AddUserRepositoryNamespace } from '@/data/namespace/db/user/add-user-repository.namespace';
import { AddUserRepository } from '@/data/protocols/db/user/add-user-repository';
import { UserEntity } from '@/domain/entities/user/user-entity';
import { AddUserDto } from '@/presentation/http/dtos/user/add-user.dto';

export class AddUserUseCase {
  constructor(private readonly addUserRepository: AddUserRepository) {}

  async execute(data: AddUserDto): Promise<AddUserRepositoryNamespace.Result> {
    const user = UserEntity.create(data);
    return await this.addUserRepository.add(user);
  }
}
