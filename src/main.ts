import { NestFactory } from '@nestjs/core';
import { AppModule } from '@/infra/ioc/app/app.module';
import { Configure } from '@/infra/configure/configure';
import { ConfigService } from '@nestjs/config';
import { Logger } from '@nestjs/common';
import { NestExpressApplication } from '@nestjs/platform-express';
import { Swagger } from '@/infra/swagger';

async function bootstrap() {
  const logger = new Logger('Main');
  const app = await NestFactory.create<NestExpressApplication>(AppModule);

  Swagger.setup(app);

  const port = new Configure(new ConfigService()).port();
  await app.listen(port, () =>
    logger.log(`Server is running on http://localhost:${port}`),
  );
}
bootstrap();
