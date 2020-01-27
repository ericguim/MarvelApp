import { Body, Controller, Delete, Get, HttpCode, Param, Post, Put } from '@nestjs/common';
import { CharacterService } from '../service';
import { Constants } from '../../CommonsModule';
import { CharacterDTO, NewCharacterDTO, ComicDTO, EventDTO, SeriesDTO, StoryDTO } from '../dto';
import { CharacterMapper } from '../mapper';
import { ApiBody, ApiCreatedResponse, ApiOkResponse, ApiOperation, ApiParam, ApiTags } from '@nestjs/swagger';

@ApiTags('Character')
@Controller(`${Constants.API_PREFIX}/${Constants.API_VERSION_1}/${Constants.CHARACTERS_ENDPOINT}`)
export class CharacterController {
  constructor(
    private readonly service: CharacterService,
    private readonly mapper: CharacterMapper,
  ){ 
  }

  @Get()
  @HttpCode(200)
  @ApiOperation({ summary: 'Get Characters', description: 'Get all Characters' })
  @ApiOkResponse({ type: CharacterDTO, isArray: true, description: 'All Characters'})
  public async getAllCharacters(): Promise<CharacterDTO[]>{
    return this.mapper.toDtoList(await this.service.getAllCharacters());
  }

  @Get('/:characterId')
  @HttpCode(200)
  @ApiOperation({ summary: 'Get Character', description: 'Get Characters' })
  @ApiOkResponse({ type: CharacterDTO, description: 'Character'})
  @ApiParam({ name: 'characterId', type: String, required: true, description: 'Character ID' })
  public async getCharacter(@Param('characterId') characterId: CharacterDTO['id']): Promise<CharacterDTO>{
    return this.mapper.toDto(await this.service.getCharacter(characterId));
  }

  @Get('/:characterId/comics')
  @HttpCode(200)
  @ApiOperation({ summary: 'Get Comics by Character', description: 'Get Comics by Character ID' })
  @ApiOkResponse({ type: CharacterDTO, description: 'Character'})
  @ApiParam({ name: 'characterId', type: String, required: true, description: 'Character ID' })
  public async getComicsByCharacterId(@Param('characterId') characterId: CharacterDTO['id']): Promise<ComicDTO[]>{
    return await this.service.getComicsByCharacterId(characterId);
  }

  @Get('/:characterId/events')
  @HttpCode(200)
  @ApiOperation({ summary: 'Get Events by Character', description: 'Get Events by Character ID' })
  @ApiOkResponse({ type: CharacterDTO, description: 'Character'})
  @ApiParam({ name: 'characterId', type: String, required: true, description: 'Character ID' })
  public async getEventsByCharacterId(@Param('characterId') characterId: CharacterDTO['id']): Promise<EventDTO[]>{
    return await this.service.getEventsByCharacterId(characterId);
  }

  @Get('/:characterId/series')
  @HttpCode(200)
  @ApiOperation({ summary: 'Get Series by Character', description: 'Get Series by Character ID' })
  @ApiOkResponse({ type: CharacterDTO, description: 'Character'})
  @ApiParam({ name: 'characterId', type: String, required: true, description: 'Character ID' })
  public async getSeriesByCharacterId(@Param('characterId') characterId: CharacterDTO['id']): Promise<SeriesDTO[]>{
    return await this.service.getSeriesByCharacterId(characterId);
  }

  @Get('/:characterId/stories')
  @HttpCode(200)
  @ApiOperation({ summary: 'Get Stories by Character', description: 'Get Stories by Character ID' })
  @ApiOkResponse({ type: CharacterDTO, description: 'Character'})
  @ApiParam({ name: 'characterId', type: String, required: true, description: 'Character ID' })
  public async getStoriesByCharacterId(@Param('characterId') characterId: CharacterDTO['id']): Promise<StoryDTO[]>{
    return await this.service.getStoriesByCharacterId(characterId);
  }
}