import { Series } from '../entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsDate } from 'class-validator';
import { Expose } from 'class-transformer';
import { CharacterDTO } from '../dto';

export class SeriesDTO {
  @IsNumber()
  @Expose()
  @ApiProperty({ type: String })
  id: Series['id'];

  @IsString()
  @Expose()
  @ApiProperty({ type: String })
  name: Series['name'];

  @IsString()
  @Expose()
  @ApiProperty({ type: String })
  description: Series['description'];

  @IsDate()
  @Expose()
  @ApiProperty({ type: Date })
  launchDate: Series['launchDate'];

  @IsNumber()
  @Expose()
  @ApiProperty({ type: Number })
  numberOfEpisodes: Series['numberOfEpisodes'];

  @IsString()
  @Expose()
  @ApiProperty({ type: CharacterDTO })
  character: CharacterDTO;
}