import { NestFactory } from '@nestjs/core';
import { Transport, TcpOptions } from '@nestjs/microservices';

import { AppMailerModule } from './mailer.module';
import { ConfigService } from './services/config/config.service';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppMailerModule, {
    transport: Transport.TCP,
    options: {
      host: 'mailer',
      port: new ConfigService().get('port'),
    },
  } as TcpOptions);
  await app.listen();
}
bootstrap();
