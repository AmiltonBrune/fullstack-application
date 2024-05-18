import { Transport } from '@nestjs/microservices';

export class ConfigService {
  private readonly envConfig: { [key: string]: any } = null;

  constructor() {
    this.envConfig = {};
    this.envConfig.port = process.env.API_GATEWAY_PORT;
    this.envConfig.tokenService = {
      options: {
        port: process.env.TOKEN_SERVICE_PORT,
        host: process.env.TOKEN_SERVICE_HOST,
      },
      transport: Transport.TCP,
    };
    this.envConfig.userService = {
      options: {
        port: process.env.USER_SERVICE_PORT,
        host: process.env.USER_SERVICE_HOST,
      },
      transport: Transport.TCP,
    };
    this.envConfig.permissionService = {
      options: {
        port: process.env.PERMISSION_SERVICE_PORT,
        host: process.env.PERMISSION_SERVICE_HOST,
      },
      transport: Transport.TCP,
    };
    this.envConfig.imageService = {
      options: {
        port: process.env.IMAGE_SERVICE_PORT,
        host: process.env.IMAGE_SERVICE_HOST,
      },
      transport: Transport.TCP,
    };
    this.envConfig.categoryService = {
      options: {
        port: process.env.CATEGORY_SERVICE_PORT,
        host: process.env.CATEGORY_SERVICE_HOST,
      },
      transport: Transport.TCP,
    };
    this.envConfig.videoService = {
      options: {
        port: process.env.VIDEO_SERVICE_PORT,
        host: process.env.VIDEO_SERVICE_HOST,
      },
      transport: Transport.TCP,
    };
  }

  get(key: string): any {
    return this.envConfig[key];
  }
}
