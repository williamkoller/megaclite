import { Module } from '@nestjs/common';
import { HealthCheckController } from '@/presentation/http/controllers/health-check';

@Module({
  controllers: [HealthCheckController],
})
export class HealthCheckModule {}
