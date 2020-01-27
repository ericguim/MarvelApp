import { EntityRepository, Repository } from 'typeorm';
import { Character } from '../entity';

@EntityRepository(Character)
export class CharacterRepository extends Repository<Character> {
  async findById(characterId: Character['id']){
    return this.findOne({ id: characterId });
  }
}