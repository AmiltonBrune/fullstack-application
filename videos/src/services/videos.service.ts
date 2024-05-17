import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { IVideo } from '../interfaces/videos.interface';
import { IVideoUpdateParams } from '../interfaces/videos-update-params.interface';

@Injectable()
export class VideoService {
  constructor(
    @InjectModel('Video') private readonly videosModel: Model<IVideo>,
  ) {}

  public async getVideosByUserId(
    userId: string,
    categories?: string[],
  ): Promise<IVideo[]> {
    const filter: any = { user_id: userId };
    if (categories && categories.length > 0) {
      filter.categories = { $in: categories };
    }
    return this.videosModel.find(filter).exec();
  }

  public async createVideo(itemBody: IVideo): Promise<IVideo> {
    const videosModel = new this.videosModel(itemBody);
    return await videosModel.save();
  }

  public async findVideoById(id: string) {
    return await this.videosModel.findById(id);
  }

  public async removeVideoById(id: string) {
    return await this.videosModel.findOneAndDelete({ _id: id });
  }

  public async updateVideoById(
    id: string,
    params: IVideoUpdateParams,
  ): Promise<any> {
    return await this.videosModel.updateOne({ _id: id }, params);
  }
}
