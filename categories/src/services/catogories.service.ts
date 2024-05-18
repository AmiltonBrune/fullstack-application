import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

import { ICategory } from '../interfaces/categories.interface';
import { ICategoryUpdateParams } from '../interfaces/categories-update-params.interface';

@Injectable()
export class CategoryService {
  constructor(
    @InjectModel('Category') private readonly categoryModel: Model<ICategory>,
  ) {}

  public async findAllCategories(): Promise<ICategory[]> {
    return await this.categoryModel.find({});
  }

  public async createCategory(categoryBody: ICategory): Promise<ICategory> {
    const categoryModel = new this.categoryModel(categoryBody);
    return await categoryModel.save();
  }

  public async findCategoryById(id: string) {
    return await this.categoryModel.findById(id);
  }

  public async removeCategoryById(id: string) {
    return await this.categoryModel.findOneAndDelete({ _id: id });
  }

  public async updateCategoryById(
    id: string,
    params: ICategoryUpdateParams,
  ): Promise<any> {
    return await this.categoryModel.updateOne({ _id: id }, params);
  }
}
