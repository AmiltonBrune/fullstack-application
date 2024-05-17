import { Controller, HttpStatus } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';

import { CategoryService } from './services/catogories.service';
import { ICategory } from './interfaces/categories.interface';
import { ICategoriesResponse } from './interfaces/categories-response.interface';
import { ICategoryCreateResponse } from './interfaces/categories-create-response.interface';

@Controller()
export class CategoryController {
  constructor(private readonly categoryService: CategoryService) {}

  @MessagePattern('categories_findAll')
  public async getAllCategories(): Promise<ICategoriesResponse> {
    const categories = await this.categoryService.findAllCategories();

    return {
      status: HttpStatus.OK,
      message: 'categories_findAll_success',
      categories,
    };
  }

  @MessagePattern('category_create')
  public async categoryCreate(
    categoryBody: ICategory,
  ): Promise<ICategoryCreateResponse> {
    let result: ICategoryCreateResponse;

    if (categoryBody) {
      try {
        const categories =
          await this.categoryService.createCategory(categoryBody);
        result = {
          status: HttpStatus.CREATED,
          message: 'category_create_success',
          categories,
          errors: null,
        };
      } catch (e) {
        result = {
          status: HttpStatus.PRECONDITION_FAILED,
          message: 'category_create_precondition_failed',
          categories: null,
          errors: e.errors,
        };
      }
    } else {
      result = {
        status: HttpStatus.BAD_REQUEST,
        message: 'category_create_bad_request',
        categories: null,
        errors: null,
      };
    }

    return result;
  }
}
