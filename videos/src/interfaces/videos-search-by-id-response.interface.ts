import { IVideo } from './videos.interface';

export interface IVideoSearchByIdResponse {
  status: number;
  message: string;
  videos: IVideo;
}
