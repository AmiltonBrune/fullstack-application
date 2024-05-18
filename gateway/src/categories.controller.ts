import {
  Controller,
  Inject,
  Get,
  Post,
  Body,
  Req,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { firstValueFrom } from 'rxjs';
import { ClientProxy } from '@nestjs/microservices';
import {
  ApiTags,
  ApiOkResponse,
  ApiCreatedResponse,
  ApiSecurity,
} from '@nestjs/swagger';

import { Authorization } from './decorators/authorization.decorator';
import { IAuthorizedRequest } from './interfaces/common/authorized-request.interface';
import { IServiceCategoryFindAllResponse } from './interfaces/categories/service-items-search-by-user-id-response.interface';
import { IServiceCategoryCreateResponse } from './interfaces/categories/service-items-create-response.interface';
import { GetCategoryResponseDto } from './interfaces/categories/dto/get-video-response.dto';
import { CreateCategoryResponseDto } from './interfaces/categories/dto/create-category-response.dto';
import { CreaCategoryDto } from './interfaces/categories/dto/create-category.dto';

@Controller('categories')
@ApiTags('categories')
export class CategoryController {
  constructor(
    @Inject('CATEGORY_SERVICE')
    private readonly categoryServiceClient: ClientProxy,
  ) {}

  @Get()
  @ApiOkResponse({
    type: GetCategoryResponseDto,
    description: 'List of categories ',
  })
  @ApiSecurity('authorization')
  public async getCategories(): Promise<GetCategoryResponseDto> {
    const categoriesResponse: IServiceCategoryFindAllResponse =
      await firstValueFrom(
        this.categoryServiceClient.send('categories_findAll', ''),
      );

    return {
      message: categoriesResponse.message,
      data: {
        categories: categoriesResponse.categories,
      },
      errors: null,
    };
  }

  @Post()
  @Authorization(true)
  @ApiCreatedResponse({
    type: CreateCategoryResponseDto,
  })
  @ApiSecurity('authorization')
  public async createCategory(
    @Req() request: IAuthorizedRequest,
    @Body() categoryRequest: CreaCategoryDto,
  ): Promise<CreateCategoryResponseDto> {
    const userInfo = request.user;
    const createCategoryResponse: IServiceCategoryCreateResponse =
      await firstValueFrom(
        this.categoryServiceClient.send(
          'category_create',
          Object.assign(categoryRequest, { user_id: userInfo.id }),
        ),
      );

    if (createCategoryResponse.status !== HttpStatus.CREATED) {
      throw new HttpException(
        {
          message: createCategoryResponse.message,
          data: null,
          errors: createCategoryResponse.errors,
        },
        createCategoryResponse.status,
      );
    }

    return {
      message: createCategoryResponse.message,
      data: {
        categories: createCategoryResponse.categories,
      },
      errors: null,
    };
  }
}
