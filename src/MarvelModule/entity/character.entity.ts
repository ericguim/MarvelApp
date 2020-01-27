import { Audit } from '../../CommonsModule';
import { Column, Entity, PrimaryGeneratedColumn, OneToMany, JoinColumn } from 'typeorm';
import { Comic, Story, Event, Series } from '../entity';

@Entity()
export class Character extends Audit {
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
    name: 'resource_uri',
  })
  resourceURI: string;

  @Column('simple-array', {
    'nullable': false,
  })
  urls: string[];

  @Column({
    'nullable': false,
    name: 'thumbnail'
  })
  thumbNail: string;

  @OneToMany<Comic>('Comic', (comic: Comic) => comic.character)
  comics: Comic[];

  @OneToMany<Story>('Story', (story: Story) => story.character)
  stories: Story[];

  @OneToMany<Event>('Event', (events: Event) => events.character)
  events: Event[];
  
  @OneToMany<Series>('Series', (series: Series) => series.character)
  series: Series[];

}
