import { Module } from '@nestjs/common';
import { DatabaseModule } from '../../database/database.module';
import { UserController } from '../../../presentation/http/controllers/user/user.controller';
import { AddUserUseCase } from '../../../usecases/user/add-user/add-user-usecase';
import { AddUserRepository } from '../../../data/protocols/db/user/add-user-repository';
import { DbUserInMemoryRepository } from '../../database/repositories/db-in-memory/user/db-user-in-memory-repository';

@Module({
  imports: [DatabaseModule],
  providers: [
    {
      provide: AddUserUseCase,
      useFactory: (addUserRepository: AddUserRepository) => {
        return new AddUserUseCase(addUserRepository);
      },
      inject: [DbUserInMemoryRepository],
    },
  ],
  controllers: [UserController],
})
export class UserModule {}
