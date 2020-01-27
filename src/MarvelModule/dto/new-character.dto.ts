import { Character } from '../entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsString, IsDate } from 'class-validator';
import { Expose } from 'class-transformer';

export class NewCharacterDTO {
  @IsString()
  @Expose()
  @ApiProperty({ type: String })
  name: Character['name'];

  @IsDate()
  @Expose()
  @ApiProperty({ type: Date })
  modified: Character['modified'];

  @IsString()
  @Expose()
  @ApiProperty({ type: String })
  description: Character['description'];

  @IsString()
  @Expose()
  @ApiProperty({ type: String })
  resourceURI: Character['resourceURI'];

  @IsString()
  @Expose()
  @ApiProperty({ type: String, isArray: true })
  urls: Character['urls'];

  @IsString()
  @Expose()
  @ApiProperty({ type: String })
  thumbNail: Character['thumbNail'];
}
