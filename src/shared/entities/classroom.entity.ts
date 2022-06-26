import { getUnixTime } from 'date-fns';
import { BeforeInsert, BeforeUpdate, Column, Entity } from 'typeorm';

import { BaseEntity, IBaseEntity } from './base.entity';

interface IClassroom extends IBaseEntity {
  name?: string;
}

@Entity('Classroom')
export class Classroom extends BaseEntity {
  constructor(props?: IClassroom) {
    const { name, ...superItem } = props || {};

    super(superItem);

    Object.assign(this, { name });
  }

  @Column({ type: 'varchar', width: 128 })
  name: string;

  @Column()
  order: number;

  @BeforeInsert()
  init(): void {
    this.isActive = true;
    this.createdAt = getUnixTime(new Date());
  }

  @BeforeUpdate()
  update(): void {
    this.updatedAt = getUnixTime(new Date());
  }
}
