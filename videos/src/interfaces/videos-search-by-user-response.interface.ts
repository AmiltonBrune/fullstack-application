import { IVideo } from './videos.interface';

export interface IVideoSearchByUserResponse {
  status: number;
  message: string;
  videos: IVideo[];
}
