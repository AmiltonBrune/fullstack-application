import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { writeFile } from 'fs';
import { join } from 'path';
import { promisify } from 'util';
import { Image } from '../interfaces/image.interface';
import { CreateImageDto } from '../dto/create-image.dto';

const writeFileAsync = promisify(writeFile);

@Injectable()
export class ImageService {
  constructor(
    @InjectModel('Image') private readonly imageModel: Model<Image>,
  ) {}

  async create(createImageDto: CreateImageDto): Promise<Image> {
    const createdImage = new this.imageModel(createImageDto);

    const savedImage = await createdImage.save();

    const filePath = join(
      '/var/www/image-service/uploads',
      `${savedImage._id}-${createImageDto.filename}`,
    );
    await writeFileAsync(filePath, Buffer.from(createImageDto.content));

    savedImage.filePath = filePath;
    await savedImage.save();

    return savedImage;
  }

  async findById(id: string): Promise<Image> {
    return await this.imageModel.findById(id).exec();
  }
}
