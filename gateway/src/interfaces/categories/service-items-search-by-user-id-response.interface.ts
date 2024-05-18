import { ICategory } from './categories.interface';

export interface IServiceCategoryFindAllResponse {
  status: number;
  message: string;
  categories: ICategory[];
}
