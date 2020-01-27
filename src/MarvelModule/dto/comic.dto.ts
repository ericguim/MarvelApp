import { Comic } from '../entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsDate } from 'class-validator';
import { Expose } from 'class-transformer';
import { CharacterDTO } from '../dto';

export class ComicDTO {
  @IsNumber()
  @Expose()
  @ApiProperty({ type: String })
  id: Comic['id'];

  @IsString()
  @Expose()
  @ApiProperty({ type: String })
  name: Comic['name'];

  @IsString()
  @Expose()
  @ApiProperty({ type: String })
  description: Comic['description'];

  @IsDate()
  @Expose()
  @ApiProperty({ type: Date })
  launchDate: Comic['launchDate'];

  @IsNumber()
  @Expose()
  @ApiProperty({ type: Number })
  numberOfPages: Comic['numberOfPages'];

  @IsString()
  @Expose()
  @ApiProperty({ type: CharacterDTO })
  character: CharacterDTO;
}
