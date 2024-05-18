import {
  Controller,
  Inject,
  Get,
  Post,
  Param,
  HttpException,
  HttpStatus,
  UploadedFile,
  UseInterceptors,
  Logger,
  Res,
} from '@nestjs/common';
import { FileInterceptor } from '@nestjs/platform-express';
import { ClientProxy } from '@nestjs/microservices';
import { firstValueFrom } from 'rxjs';
import {
  ApiTags,
  ApiOperation,
  ApiResponse,
  ApiConsumes,
  ApiBody,
} from '@nestjs/swagger';
import { Express, Response } from 'express';
import { CreateImageDto } from './interfaces/image/dtos/create-image.dto';
import { createReadStream, existsSync } from 'fs';

@ApiTags('images')
@Controller('images')
export class ImageController {
  private readonly logger = new Logger(ImageController.name);

  constructor(@Inject('IMAGE_SERVICE') private readonly client: ClientProxy) {}

  @Get(':id')
  @ApiOperation({ summary: 'Get image by ID' })
  @ApiResponse({ status: 200, description: 'Image found.' })
  @ApiResponse({ status: 404, description: 'Image not found.' })
  async getImage(@Param('id') id: string, @Res() res: Response) {
    this.logger.log(`Getting image with ID: ${id}`);
    const response = await firstValueFrom(this.client.send('get_image', id));
    this.logger.log(`Response received: ${JSON.stringify(response)}`);

    if (response.status !== HttpStatus.OK) {
      throw new HttpException(response.message, response.status);
    }

    try {
      const buffer = Buffer.from(response.data.content.data);
      this.logger.log(`Buffer length: ${buffer.length}`);

      res.setHeader('Content-Type', 'image/jpeg');
      res.setHeader(
        'Content-Disposition',
        `inline; filename="${response.data.filename}"`,
      );
      res.end(buffer);
    } catch (error) {
      this.logger.error(`Error processing image: ${error.message}`);
      throw new HttpException(
        'Error processing image',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Get('image/:id')
  @ApiOperation({ summary: 'Get image by ID from folder' })
  @ApiResponse({ status: 200, description: 'Image retrieved successfully.' })
  @ApiResponse({ status: 404, description: 'Image not found.' })
  async getImageById(@Param('id') id: string, @Res() res: Response) {
    this.logger.log(`Getting image with ID: ${id}`);
    try {
      const response = await firstValueFrom(this.client.send('get_image', id));

      if (response.status !== HttpStatus.OK) {
        throw new HttpException(response.message, response.status);
      }

      const filePath = response.data.filePath;
      this.logger.log(`Fetching file from path: ${filePath}`);
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
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post()
  @UseInterceptors(FileInterceptor('file'))
  @ApiOperation({ summary: 'Upload an image' })
  @ApiConsumes('multipart/form-data')
  @ApiBody({
    description: 'Image file',
    schema: {
      type: 'object',
      properties: {
        file: {
          type: 'string',
          format: 'binary',
        },
      },
    },
  })
  @ApiResponse({ status: 201, description: 'Image uploaded successfully.' })
  @ApiResponse({ status: 400, description: 'Bad request.' })
  async createImage(@UploadedFile() file: Express.Multer.File) {
    if (!file) {
      this.logger.error('No file provided');
      throw new HttpException('File is not provided', HttpStatus.BAD_REQUEST);
    }

    this.logger.log(`Received file: ${file.originalname}`);

    const createImageDto: CreateImageDto = {
      filename: file.originalname,
      content: file.buffer,
    };

    this.logger.log(
      `Sending createImageDto: ${JSON.stringify(createImageDto)}`,
    );

    try {
      const response = await firstValueFrom(
        this.client.send('create_image', createImageDto),
      );

      this.logger.log(
        `Response from image service: ${JSON.stringify(response)}`,
      );

      if (response.status !== HttpStatus.CREATED) {
        throw new HttpException(response.message, response.status);
      }

      return {
        message: response.message,
        data: {
          id: response.data._id,
          filename: response.data.filename,
          filePath: response.data.filePath,
        },
      };
    } catch (error) {
      this.logger.error(`Error occurred: ${error.message}`, error.stack);
      throw new HttpException(
        'Internal server error',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
