import { DataSource } from 'typeorm';

import {
  DB_HOST, DB_PASSWORD, DB_PORT, DB_USERNAME,
} from './utils/constants';
import Note from './entities/Note';

const dataSource = new DataSource({
  type: 'postgres',
  host: DB_HOST,
  port: parseInt(DB_PORT as string, 10),
  username: DB_USERNAME,
  password: DB_PASSWORD,
  entities: [Note],
});

export default dataSource;
