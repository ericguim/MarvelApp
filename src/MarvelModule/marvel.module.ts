import { Module } from '@nestjs/common';
import { CharacterController } from './controllers';
import { CharacterService } from './service';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharacterRepository } from './repository';
import { Character } from './entity';
import { CharacterMapper } from './mapper';

@Module({
  imports: [
    TypeOrmModule.forFeature([ 
      Character,
      CharacterRepository,
    ]),
  ],
  controllers: [
    CharacterController,
  ],
  providers: [
    CharacterService,
    CharacterMapper,
  ],
  exports: [ CharacterService ],
})
export class MarvelModule {}