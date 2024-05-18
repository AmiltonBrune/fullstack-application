import { ICategory } from './categories.interface';

export interface IServiceCategoryCreateResponse {
  status: number;
  message: string;
  categories: ICategory | null;
  errors: { [key: string]: any };
}
