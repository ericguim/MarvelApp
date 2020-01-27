import { Audit } from '../../CommonsModule';
import { Column, Entity, PrimaryGeneratedColumn, ManyToOne } from 'typeorm';
import { Character } from '../entity';

@Entity()
export class Series extends Audit { 
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

  @Column({
    nullable: false,
    name: 'num_of_episodes',
  })
  numberOfEpisodes: Number;

  @ManyToOne<Character>('Character', (character: Character) => character.series)
  character: Character;
}
