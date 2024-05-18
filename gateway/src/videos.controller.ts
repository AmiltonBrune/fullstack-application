import {
  Controller,
  Inject,
  Get,
  Post,
  Body,
  Req,
  HttpException,
  HttpStatus,
  Param,
} from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';
import { ApiTags, ApiSecurity } from '@nestjs/swagger';

import { Authorization } from './decorators/authorization.decorator';
import { IAuthorizedRequest } from './interfaces/common/authorized-request.interface';
import { IVideoSearchByUserResponse } from './interfaces/videos/videos-search-by-user-response.interface';
import { IVideoCreateResponse } from './interfaces/videos/videos-create-response.interface';
import { VideoDto } from './interfaces/videos/dto/video.dto';
import { IVideoSearchByIdResponse } from './interfaces/videos/videos-search-by-id-response.interface';

@Controller('videos')
@ApiTags('videos')
export class VideoController {
  constructor(
    @Inject('VIDEO_SERVICE') private readonly videoServiceClient: ClientProxy,
  ) {}

  @Get()
  @Authorization(true)
  @ApiSecurity('authorization')
  public async getVideos(@Req() request: IAuthorizedRequest): Promise<any> {
    const userInfo = request.user;

    const videosResponse: IVideoSearchByUserResponse = await firstValueFrom(
      this.videoServiceClient.send('video_search_by_user_id', userInfo.id),
    );

    return {
      message: videosResponse.message,
      data: {
        videos: videosResponse.videos,
      },
      errors: null,
    };
  }

  @Get(':id')
  public async getVideoById(@Param('id') id: string): Promise<any> {
    const videosResponse: IVideoSearchByIdResponse = await firstValueFrom(
      this.videoServiceClient.send('video_by_id', id),
    );

    return {
      message: videosResponse.message,
      data: {
        videos: videosResponse.videos,
      },
      errors: null,
    };
  }

  @Post()
  @Authorization(true)
  @ApiSecurity('authorization')
  public async createVideo(
    @Req() request: IAuthorizedRequest,
    @Body() videoRequest: VideoDto,
  ): Promise<any> {
    const userInfo = request.user;
    const createVideoResponse: IVideoCreateResponse = await firstValueFrom(
      this.videoServiceClient.send(
        'video_create',
        Object.assign(videoRequest, { user_id: userInfo.id }),
      ),
    );

    if (createVideoResponse.status !== HttpStatus.CREATED) {
      throw new HttpException(
        {
          message: createVideoResponse.message,
          data: null,
          errors: createVideoResponse.errors,
        },
        createVideoResponse.status,
      );
    }

    return {
      message: createVideoResponse.message,
      data: {
        videos: createVideoResponse.videos,
      },
      errors: null,
    };
  }
}
