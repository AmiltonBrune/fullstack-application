import { IVideo } from './videos.interface';

export interface IVideoCreateResponse {
  status: number;
  message: string;
  videos: IVideo | null;
  errors: { [key: string]: any } | null;
}
