  import { CreateDateColumn, UpdateDateColumn, VersionColumn } from 'typeorm';

export abstract class Audit {
  
  @CreateDateColumn({
    name: 'created_at',
  })
  createdAt;

  @UpdateDateColumn()
  modified;

  @VersionColumn()
  version;
}