import { getUnixTime } from 'date-fns';
import { BeforeInsert, BeforeUpdate, Column, Entity } from 'typeorm';

import { BaseEntity, IBaseEntity } from './base.entity';

interface IHistory extends IBaseEntity {
  classroomId: string;
  studentId: string;
  type: string;
}

@Entity('History')
export class History extends BaseEntity {
  constructor(props?: IHistory) {
    const { type, classroomId, studentId, ...superItem } = props || {};

    super(superItem);

    Object.assign(this, { type, classroomId, studentId });
  }

  @Column({ type: 'varchar', width: 128 })
  classroomId: string;

  @Column({ type: 'varchar', width: 128 })
  studentId: string;

  @Column({ type: 'varchar', width: 32 })
  type: string;

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
