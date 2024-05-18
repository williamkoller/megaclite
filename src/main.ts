import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/app.module';
import { Configure } from '@/infra/configure/configure';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Main');
  const app = await NestFactory.create(AppModule);
  const port = new Configure(new ConfigService()).port();
  await app.listen(port, () =>
    logger.log(`Server is running on http://localhost:${port}`),
  );
}
bootstrap();
