import { Body, Controller, Post } from '@nestjs/common';
import { AddUserUseCase } from '../../../../usecases/user/add-user/add-user-usecase';
import { AddUserDto } from '../../dtos/user/add-user.dto';
import { ApiTags } from '@nestjs/swagger';

@ApiTags('users')
@Controller('users')
export class UserController {
  constructor(private readonly addUserUseCase: AddUserUseCase) {}

  @Post()
  async add(@Body() data: AddUserDto) {
    return await this.addUserUseCase.execute(data);
  }
}
