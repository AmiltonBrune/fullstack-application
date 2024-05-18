export interface ICategoryDeleteResponse {
  status: number;
  message: string;
  errors: { [key: string]: any } | null;
}
