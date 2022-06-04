import { DataSource } from 'typeorm';
import Note from './entities/Note';

import {
  DB_DATABASE,
  DB_HOST, DB_PASSWORD, DB_PORT, DB_USERNAME,
} from './utils/constants';

const dataSource = new DataSource({
  type: 'postgres',
  host: DB_HOST,
  port: parseInt(DB_PORT as string, 10),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  database: DB_DATABASE,
  entities: [Note],
  migrations: ['src/migrations/*.ts'],
});

export default dataSource;
