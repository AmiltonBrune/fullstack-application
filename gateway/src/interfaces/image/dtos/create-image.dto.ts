import { ApiProperty } from '@nestjs/swagger';

export class CreateImageDto {
  @ApiProperty({
    type: 'string',
    format: 'binary',
    description: 'The image file',
  })
  readonly filename: string;

  @ApiProperty({ type: 'buffer', description: 'The image content' })
  readonly content: Buffer;
}
