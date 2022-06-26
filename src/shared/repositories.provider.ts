import { Provider } from '@nestjs/common';
import { Connection } from 'typeorm';

import { MONGO_CONNECTION } from './database.provider';
import { CategoryRepository } from './repositories/category.repository';
import { ClassroomRepository } from './repositories/classroom.repository';
import { HistoryRepository } from './repositories/history.repository';
import { ProductRepository } from './repositories/product.repesitory';
import { StudentRepository } from './repositories/student.repository';
import { UserRepository } from './repositories/user.repository';

const repositories = [
  UserRepository,
  ProductRepository,
  CategoryRepository,
  ClassroomRepository,
  HistoryRepository,
  StudentRepository
];

const RepositoriesProvider: Provider[] = [];

for (const repository of repositories) {
  RepositoriesProvider.push({
    provide: repository,
    useFactory: (connection: Connection) =>
      connection.getCustomRepository(repository),
    inject: [MONGO_CONNECTION]
  });
}

export { RepositoriesProvider, repositories };
