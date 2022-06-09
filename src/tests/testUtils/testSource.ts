import { DataSource } from 'typeorm';
import Note from '../../entities/Note';

import {
  DB_HOST, DB_PASSWORD, DB_PORT, DB_USERNAME,
} from '../../utils/constants';

export const testSource = async (drop: boolean = false) => {
  const result = new DataSource({
    type: 'postgres',
    host: DB_HOST,
    port: parseInt(DB_PORT as string, 10),
    username: DB_USERNAME,
    password: DB_PASSWORD,
    database: 'notes-test',
    dropSchema: drop,
    synchronize: drop,
    entities: [Note],
    migrations: ['src/migrations/*.ts'],
  });
  await result.initialize();
  return result;
};

export default testSource;
