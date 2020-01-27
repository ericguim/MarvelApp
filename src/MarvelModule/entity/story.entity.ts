import { Audit } from '../../CommonsModule';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Character } from '../entity';

@Entity()
export class Story extends Audit { 
  @PrimaryGeneratedColumn()
  id: number;

  @Column({
    nullable: false,
    name: 'name',
  })
  name: string;

  @Column({
    nullable: false,
    name: 'description',
  })
  description: string;

  @Column({
    nullable: false,
    name: 'launch_date',
  })
  launchDate: Date;

  @ManyToOne<Character>('Character', (character: Character) => character.stories)
  character: Character;
}
