import { ApiProperty } from '@nestjs/swagger';
import { Character } from '../entity';

export class NewCharacterSwagger {
  @ApiProperty({ type: String })
  name: Character['name'];

  @ApiProperty({ type: String })
  description: Character['description'];

  @ApiProperty({ type: String })
  resourceURI: Character['resourceURI'];

  @ApiProperty({ type: String })
  urls: Character['urls'];

  @ApiProperty({ type: String })
  thumbNail: Character['thumbNail'];
}