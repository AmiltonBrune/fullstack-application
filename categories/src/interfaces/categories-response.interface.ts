import { ICategory } from './categories.interface';

export interface ICategoriesResponse {
  status: number;
  message: string;
  categories: ICategory[];
}
