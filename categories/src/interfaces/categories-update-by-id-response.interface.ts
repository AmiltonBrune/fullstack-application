import { ICategory } from './categories.interface';

export interface ICategoryUpdateByIdResponse {
  status: number;
  message: string;
  categories: ICategory | null;
  errors: { [key: string]: any } | null;
}
