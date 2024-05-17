import {
  Controller,
  HttpStatus,
  Param,
  Get,
  Res,
  Logger,
} from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { Response } from 'express';
import { createReadStream, existsSync, readdirSync } from 'fs';
import { CreateImageDto } from './dto/create-image.dto';
import { ImageService } from './service/image.service';

@Controller()
export class ImageController {
  private readonly logger = new Logger(ImageController.name);

  constructor(private readonly imageService: ImageService) {}

  @MessagePattern('create_image')
  async createImage(createImageDto: CreateImageDto) {
    try {
      const image = await this.imageService.create(createImageDto);
      return {
        status: HttpStatus.CREATED,
        message: 'Image created successfully',
        data: image,
      };
    } catch (error) {
      this.logger.error(`Error occurred: ${error.message}`, error.stack);
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Error creating image',
        errors: error.message,
      };
    }
  }

  @MessagePattern('get_image')
  async getImage(id: string) {
    try {
      const image = await this.imageService.findById(id);
      if (!image) {
        return {
          status: HttpStatus.NOT_FOUND,
          message: 'Image not found',
          data: null,
        };
      }
      return {
        status: HttpStatus.OK,
        message: 'Image retrieved successfully',
        data: image,
      };
    } catch (error) {
      return {
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Error retrieving image',
        errors: error.message,
      };
    }
  }

  @Get('image/:id')
  async getImageById(@Param('id') id: string, @Res() res: Response) {
    try {
      const image = await this.imageService.findById(id);
      if (!image) {
        return res.status(HttpStatus.NOT_FOUND).json({
          status: HttpStatus.NOT_FOUND,
          message: 'Image not found',
        });
      }

      const filePath = image.filePath;
      this.logger.log(`Fetching file from path: ${filePath}`);

      const files = readdirSync('/var/www/image-service/uploads');
      this.logger.log(`Files in uploads directory: ${files.join(', ')}`);

      if (existsSync(filePath)) {
        const fileStream = createReadStream(filePath);
        res.setHeader('Content-Type', 'image/jpeg');
        fileStream.pipe(res);
      } else {
        return res.status(HttpStatus.NOT_FOUND).json({
          status: HttpStatus.NOT_FOUND,
          message: 'File not found',
        });
      }
    } catch (error) {
      this.logger.error(`Error occurred: ${error.message}`, error.stack);
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
        status: HttpStatus.INTERNAL_SERVER_ERROR,
        message: 'Internal server error',
      });
    }
  }
}
