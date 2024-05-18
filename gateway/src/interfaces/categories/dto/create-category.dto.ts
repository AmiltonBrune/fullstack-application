import { ApiProperty } from '@nestjs/swagger';

export class CreaCategoryDto {
  @ApiProperty({ example: 'test category' })
  title: string;
}
