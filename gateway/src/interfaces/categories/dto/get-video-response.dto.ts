import { ApiProperty } from '@nestjs/swagger';
import { ICategory } from '../categories.interface';

export class GetCategoryResponseDto {
  @ApiProperty({ example: 'item_search_success' })
  message: string;
  @ApiProperty({
    example: {
      categories: [
        {
          title: 'test categories',
          created_at: +new Date(),
          updated_at: +new Date(),
          id: '5d987c3bfb881ec86b476bcc',
        },
      ],
    },
    nullable: true,
  })
  data: {
    categories: ICategory[];
  };
  @ApiProperty({ example: 'null' })
  errors: { [key: string]: any };
}
