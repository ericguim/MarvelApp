import { Story } from '../entity';
import { ApiProperty } from '@nestjs/swagger';
import { IsNumber, IsString, IsDate } from 'class-validator';
import { Expose } from 'class-transformer';
import { CharacterDTO } from '../dto';

export class StoryDTO {
  @IsNumber()
  @Expose()
  @ApiProperty({ type: String })
  id: Story['id'];

  @IsString()
  @Expose()
  @ApiProperty({ type: String })
  name: Story['name'];

  @IsString()
  @Expose()
  @ApiProperty({ type: String })
  description: Story['description'];

  @IsDate()
  @Expose()
  @ApiProperty({ type: Date })
  launchDate: Story['launchDate'];

  @IsString()
  @Expose()
  @ApiProperty({ type: CharacterDTO })
  character: CharacterDTO;
}