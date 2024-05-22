import { Module } from '@nestjs/common';
import { DbUserInMemoryRepository } from './repositories/db-in-memory/user/db-user-in-memory-repository';

@Module({
  providers: [DbUserInMemoryRepository],
  exports: [DbUserInMemoryRepository],
})
export class DatabaseModule {}
