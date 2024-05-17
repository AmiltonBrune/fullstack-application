import { ApiProperty } from '@nestjs/swagger';

export class VideoDto {
  @ApiProperty({ example: 'test video' })
  title: string;
  @ApiProperty({ example: 'description example' })
  description: string;
  @ApiProperty({ example: 'http://' })
  url: string;
  @ApiProperty({ example: 'id image upload' })
  image_id: string;
  @ApiProperty({ example: ['drama', 'ação'] })
  categories: string[];
}
