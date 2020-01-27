import { Injectable } from '@nestjs/common';
import { Mapper } from '../../CommonsModule/mapper';
import { CharacterDTO } from '../dto';
import { Character } from '../entity';

@Injectable()
export class CharacterMapper extends Mapper<Character, CharacterDTO> {
  constructor() {
    super(Character, CharacterDTO);
  }

  toDto(entityObject: Character): CharacterDTO {
    return super.toDto(entityObject);
  }

  toDtoList(entityArray: Character[]): CharacterDTO[] {
    return super.toDtoList(entityArray);
  }

  toEntity(dtoObject: CharacterDTO): Character {
    return super.toEntity(dtoObject);
  }

  toEntityList(dtoArray: CharacterDTO[]): Character[] {
    return super.toEntityList(dtoArray);
  }
}