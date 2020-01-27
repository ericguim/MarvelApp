import { Event } from '../entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsDate } from 'class-validator';
import { Expose } from 'class-transformer';
import { CharacterDTO } from '../dto';

export class EventDTO {
  @IsNumber()
  @Expose()
  @ApiProperty({ type: String })
  id: Event['id'];

  @IsString()
  @Expose()
  @ApiProperty({ type: String })
  name: Event['name'];

  @IsString()
  @Expose()
  @ApiProperty({ type: String })
  description: Event['description'];

  @IsDate()
  @Expose()
  @ApiProperty({ type: Date })
  eventDate: Event['eventDate'];

  @IsString()
  @Expose()
  @ApiProperty({ type: CharacterDTO })
  character: CharacterDTO;
}