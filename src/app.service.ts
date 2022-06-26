import { BadRequestException, Injectable } from '@nestjs/common';
import { History } from './shared/entities/history.entity';

import { HistoryRepository } from './shared/repositories/history.repository';

@Injectable()
export class AppService {
  constructor(private historyRepository: HistoryRepository) {}

  async voteStudent({ classroomId, studentId, type }) {
    if (!classroomId) {
      throw new BadRequestException('Invalid classroomId');
    }

    if (!studentId) {
      throw new BadRequestException('Invalid studentId');
    }

    await this.historyRepository.save(
      new History({ classroomId, studentId, type })
    );

    return true;
  }
}
