import { NestFactory } from '@nestjs/core';
import { VideosModule } from './videos.module';
import { Transport, TcpOptions } from '@nestjs/microservices';

import { ConfigService } from './services/config/config.service';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(VideosModule, {
    transport: Transport.TCP,
    options: {
      host: 'video',
      port: new ConfigService().get('port'),
    },
  } as TcpOptions);
  await app.listen();
}
bootstrap();
