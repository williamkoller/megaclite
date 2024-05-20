import { Module } from '@nestjs/common';
import { ConfigureModule } from '@/infra/configure/configure.module';
import { HealthCheckModule } from '@/infra/ioc/health-check';

@Module({
  imports: [ConfigureModule, HealthCheckModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
