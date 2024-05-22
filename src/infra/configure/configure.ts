import { ConfigService } from '@nestjs/config';
import { Injectable } from '@nestjs/common';
import { ApplicationInterface } from '@/data/protocols/db/app/application.interface';

@Injectable()
export class Configure implements ApplicationInterface {
  constructor(private readonly config: ConfigService) {}
  port(): number {
    return this.config.get<number>('PORT');
  }
}
