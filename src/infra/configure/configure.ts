import { ConfigService } from '@nestjs/config';
import { ApplicationInterface } from '../../domain/database/application.interface';
import { Injectable } from '@nestjs/common';

@Injectable()
export class Configure implements ApplicationInterface {
  constructor(private readonly config: ConfigService) {}
  port(): number {
    return this.config.get<number>('PORT');
  }
}
