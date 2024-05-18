import { NestFactory } from '@nestjs/core';
import { CategoryModule } from './categories.module';
import { Transport, TcpOptions } from '@nestjs/microservices';

import { ConfigService } from './services/config/config.service';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(CategoryModule, {
    transport: Transport.TCP,
    options: {
      host: 'category',
      port: new ConfigService().get('port'),
    },
  } as TcpOptions);
  await app.listen();
}
bootstrap();
