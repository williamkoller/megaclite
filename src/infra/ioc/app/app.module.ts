import { Module } from '@nestjs/common';
import { ConfigureModule } from '@/infra/configure/configure.module';
import { HealthCheckModule } from '@/infra/ioc/health-check/health-check.module';
import { UserModule } from '../user/user.module';

@Module({
  imports: [ConfigureModule, HealthCheckModule, UserModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
