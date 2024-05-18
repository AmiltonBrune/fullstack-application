import { ApiProperty } from '@nestjs/swagger';
import { ICategory } from '../categories.interface';

export class CreateCategoryResponseDto {
  @ApiProperty({ example: 'category_create_success' })
  message: string;
  @ApiProperty({
    example: {
      categories: {
        title: 'teste category',
        created_at: +new Date(),
        updated_at: +new Date(),
        id: '5d987c3bfb881ec86b476bcc',
      },
    },
    nullable: true,
  })
  data: {
    categories: ICategory;
  };
  @ApiProperty({ example: null, nullable: true })
  errors: { [key: string]: any };
}
