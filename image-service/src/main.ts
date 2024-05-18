import { NestFactory } from '@nestjs/core';
import { Transport, TcpOptions } from '@nestjs/microservices';
import { ImageModule } from './image.module';
import { ConfigService } from './service/config/config.service';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(ImageModule, {
    transport: Transport.TCP,
    options: {
      host: 'image-service',
      port: new ConfigService().get('port'),
    },
  } as TcpOptions);
  await app.listen();
}
bootstrap();
