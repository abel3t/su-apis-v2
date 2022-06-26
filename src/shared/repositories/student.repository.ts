import { Injectable } from '@nestjs/common';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';

import { Student } from '../entities/student.entity';
import { BaseRepository } from './base.repository';

@Injectable()
@EntityRepository(Student)
export class StudentRepository extends BaseRepository<Student> {}
