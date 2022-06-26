import { Injectable } from '@nestjs/common';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';

import { Classroom } from '../entities/classroom.entity';
import { BaseRepository } from './base.repository';

@Injectable()
@EntityRepository(Classroom)
export class ClassroomRepository extends BaseRepository<Classroom> {}
