import { Character } from '../entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsDate, IsOptional } from 'class-validator';
import { Expose } from 'class-transformer';
import { ComicDTO, StoryDTO, EventDTO, SeriesDTO } from '../dto';

export class CharacterDTO {
  @IsNumber()
  @Expose()
  @ApiProperty({ type: String })
  id: Character['id'];

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

  @IsString()
  @IsOptional()
  @Expose()
  @ApiProperty({ type: ComicDTO, isArray: true })
  comics: ComicDTO[];

  @IsString()
  @IsOptional()
  @Expose()
  @ApiProperty({ type: StoryDTO, isArray: true })
  stories: StoryDTO[];

  @IsString()
  @IsOptional()
  @Expose()
  @ApiProperty({ type: EventDTO, isArray: true })
  events: EventDTO[];

  @IsString()
  @IsOptional()
  @Expose()
  @ApiProperty({ type: SeriesDTO, isArray: true })
  series: SeriesDTO[];
}
