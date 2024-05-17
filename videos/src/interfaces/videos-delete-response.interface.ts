export interface IVideoDeleteResponse {
  status: number;
  message: string;
  errors: { [key: string]: any } | null;
}
