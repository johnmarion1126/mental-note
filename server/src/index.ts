import 'reflect-metadata';
import express from 'express';
import dotenv from 'dotenv';
import { PORT } from './utils/constants';
import dataSource from './dataSource';

dotenv.config();

const main = async () => {
  await dataSource.initialize();
  const app = express();

  app.listen(PORT, () => {
    console.log(`server started on localhost:${PORT}`);
  });
};

main().catch((e) => {
  console.error(e);
});
