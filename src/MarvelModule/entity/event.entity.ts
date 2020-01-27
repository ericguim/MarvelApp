import { Audit } from '../../CommonsModule';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Character } from '../entity';

@Entity()
export class Event extends Audit { 
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
    name: 'event_date',
  })
  eventDate: Date;

  @ManyToOne<Character>('Character', (character: Character) => character.events)
  character: Character;
}
