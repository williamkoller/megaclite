import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export class Swagger {
  static setup(app: NestExpressApplication) {
    const config = new DocumentBuilder()
      .setTitle('Megaclite example')
      .setDescription('The Megaclite API description')
      .setVersion('0.0.1')
      .build();
    const document = SwaggerModule.createDocument(app, config);
    SwaggerModule.setup('swagger', app, document);
  }
}
