import { Controller, HttpStatus } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { VideoService } from './services/videos.service';
import { IVideo } from './interfaces/videos.interface';
import { IVideoUpdateParams } from './interfaces/videos-update-params.interface';
import { IVideoSearchByUserResponse } from './interfaces/videos-search-by-user-response.interface';
import { IVideoDeleteResponse } from './interfaces/videos-delete-response.interface';
import { IVideoCreateResponse } from './interfaces/videos-create-response.interface';
import { IVideoUpdateByIdResponse } from './interfaces/videos-update-by-id-response.interface';
import { IVideoSearchByIdResponse } from './interfaces/videos-search-by-id-response.interface';

@Controller()
export class VideoController {
  constructor(private readonly videoService: VideoService) {}

  @MessagePattern('video_search_by_user_id')
  public async videoSearchByUserId(
    userId: string,
    categories?: string[],
  ): Promise<IVideoSearchByUserResponse> {
    let result: IVideoSearchByUserResponse;

    if (userId) {
      const videos = await this.videoService.getVideosByUserId(
        userId,
        categories,
      );
      result = {
        status: HttpStatus.OK,
        message: 'video_search_by_user_id_success',
        videos,
      };
    } else {
      result = {
        status: HttpStatus.BAD_REQUEST,
        message: 'video_search_by_user_id_bad_request',
        videos: null,
      };
    }

    return result;
  }

  @MessagePattern('video_by_id')
  public async videoById(params: {
    id: string;
  }): Promise<IVideoSearchByIdResponse> {
    let result: IVideoSearchByIdResponse;
    if (params.id) {
      try {
        const videos = await this.videoService.findVideoById(params.id);
        result = {
          status: HttpStatus.OK,
          message: 'video_by_id_success',
          videos,
        };
      } catch (e) {
        result = {
          status: HttpStatus.PRECONDITION_FAILED,
          message: 'video_by_id_precondition_failed',
          videos: null,
        };
      }
    } else {
      result = {
        status: HttpStatus.BAD_REQUEST,
        message: 'video_by_id_bad_request',
        videos: null,
      };
    }

    return result;
  }

  @MessagePattern('video_update_by_id')
  public async videoUpdateById(params: {
    videos: IVideoUpdateParams;
    id: string;
    userId: string;
  }): Promise<IVideoUpdateByIdResponse> {
    let result: IVideoUpdateByIdResponse;
    if (params.id) {
      try {
        const videos = await this.videoService.findVideoById(params.id);
        if (videos) {
          if (videos.user_id === params.userId) {
            const updatedVideo = Object.assign(videos, params.videos);
            await updatedVideo.save();
            result = {
              status: HttpStatus.OK,
              message: 'video_update_by_id_success',
              videos: updatedVideo,
              errors: null,
            };
          } else {
            result = {
              status: HttpStatus.FORBIDDEN,
              message: 'video_update_by_id_forbidden',
              videos: null,
              errors: null,
            };
          }
        } else {
          result = {
            status: HttpStatus.NOT_FOUND,
            message: 'video_update_by_id_not_found',
            videos: null,
            errors: null,
          };
        }
      } catch (e) {
        result = {
          status: HttpStatus.PRECONDITION_FAILED,
          message: 'video_update_by_id_precondition_failed',
          videos: null,
          errors: e.errors,
        };
      }
    } else {
      result = {
        status: HttpStatus.BAD_REQUEST,
        message: 'video_update_by_id_bad_request',
        videos: null,
        errors: null,
      };
    }

    return result;
  }

  @MessagePattern('video_create')
  public async videoCreate(videoBody: IVideo): Promise<IVideoCreateResponse> {
    let result: IVideoCreateResponse;

    if (videoBody) {
      try {
        const videos = await this.videoService.createVideo(videoBody);
        result = {
          status: HttpStatus.CREATED,
          message: 'video_create_success',
          videos,
          errors: null,
        };
      } catch (e) {
        result = {
          status: HttpStatus.PRECONDITION_FAILED,
          message: 'video_create_precondition_failed',
          videos: null,
          errors: e.errors,
        };
      }
    } else {
      result = {
        status: HttpStatus.BAD_REQUEST,
        message: 'video_create_bad_request',
        videos: null,
        errors: null,
      };
    }

    return result;
  }

  @MessagePattern('video_delete_by_id')
  public async videoDeleteForUser(params: {
    userId: string;
    id: string;
  }): Promise<IVideoDeleteResponse> {
    let result: IVideoDeleteResponse;

    if (params && params.userId && params.id) {
      try {
        const videos = await this.videoService.findVideoById(params.id);

        if (videos) {
          if (videos.user_id === params.userId) {
            await this.videoService.removeVideoById(params.id);
            result = {
              status: HttpStatus.OK,
              message: 'video_delete_by_id_success',
              errors: null,
            };
          } else {
            result = {
              status: HttpStatus.FORBIDDEN,
              message: 'video_delete_by_id_forbidden',
              errors: null,
            };
          }
        } else {
          result = {
            status: HttpStatus.NOT_FOUND,
            message: 'video_delete_by_id_not_found',
            errors: null,
          };
        }
      } catch (e) {
        result = {
          status: HttpStatus.FORBIDDEN,
          message: 'video_delete_by_id_forbidden',
          errors: null,
        };
      }
    } else {
      result = {
        status: HttpStatus.BAD_REQUEST,
        message: 'video_delete_by_id_bad_request',
        errors: null,
      };
    }

    return result;
  }
}
