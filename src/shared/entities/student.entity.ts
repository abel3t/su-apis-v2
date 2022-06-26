import { getUnixTime } from 'date-fns';
import { BeforeInsert, BeforeUpdate, Column, Entity } from 'typeorm';

import { BaseEntity, IBaseEntity } from './base.entity';

interface IStudent extends IBaseEntity {
  name?: string;
}

@Entity('Student')
export class Student extends BaseEntity {
  constructor(props?: IStudent) {
    const { name, ...superItem } = props || {};

    super(superItem);

    Object.assign(this, { name });
  }

  @Column({ type: 'varchar', width: 128 })
  name: string;

  @Column({ type: 'varchar', width: 128 })
  classroomId: string;

  @Column()
  order: number;

  @Column({ type: 'varchar', width: 256, nullable: true })
  phone?: string;

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
