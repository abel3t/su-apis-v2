import { Injectable } from '@nestjs/common';
import { EntityRepository } from 'typeorm/decorator/EntityRepository';

import { History } from '../entities/history.entity';
import { BaseRepository } from './base.repository';

@Injectable()
@EntityRepository(History)
export class HistoryRepository extends BaseRepository<History> {}
