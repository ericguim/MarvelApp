import { ConflictException, Injectable, NotFoundException } from '@nestjs/common';
import { Transactional } from 'typeorm-transactional-cls-hooked';
import { CharacterRepository } from '../repository';
import { Character, Comic, Event, Series, Story } from '../entity';
import { CharacterDTO, NewCharacterDTO } from '../dto';

@Injectable()
export class CharacterService {
  constructor(private readonly repository: CharacterRepository) {
  }

  @Transactional()
  public async add(character: NewCharacterDTO): Promise<Character>{
    const characterAlreadyExists = await this.repository.find({ name: character.name });

    if(characterAlreadyExists){
      throw new ConflictException('Personagem já existe.');
    }
    return await this.repository.save(character);
  }

  @Transactional()
  public async getAllCharacters(){
    return await this.repository.find();
  }

  @Transactional()
  public async getCharacter(characterId: Character['id']){
    const character = await this.repository.findById(characterId);
    if(!character){
      throw new NotFoundException('Personagem não encontrado.');
    }
    return character;
  }

  @Transactional()
  public async getComicsByCharacterId(characterId: Character['id']): Promise<Comic[]>{
    const character = await this.repository.findOne({ id: characterId }, { relations: ['comics'] });

    if(character.comics.length === 0){
      throw new NotFoundException('Nenhum HQ foi encontrado para este personagem.');
    }
    return character.comics;
  }

  @Transactional()
  public async getEventsByCharacterId(characterId: Character['id']): Promise<Event[]>{
    const character = await this.repository.findOne({ id: characterId }, { relations: ['events'] });

    if(character.events.length === 0){
      throw new NotFoundException('Nenhum evento foi encontrado para este personagem.');
    }
    return character.events;
  }

  @Transactional()
  public async getSeriesByCharacterId(characterId: Character['id']): Promise<Series[]>{
    const character = await this.repository.findOne({ id: characterId }, { relations: ['series'] });

    if(character.series.length === 0){
      throw new NotFoundException('Nenhuma série foi encontrada para este personagem.');
    }
    return character.series;
  }

  @Transactional()
  public async getStoriesByCharacterId(characterId: Character['id']): Promise<Story[]>{
    const character = await this.repository.findOne({ id: characterId }, { relations: ['stories'] });

    if(character.stories.length === 0){
      throw new NotFoundException('Nenhuma história foi encontrada para este personagem.');
    }
    return character.stories;
  }
}