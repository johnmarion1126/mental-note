import 'reflect-metadata';
import express from 'express';
import dotenv from 'dotenv';

dotenv.config();

const main = async () => {
  const app = express();

  app.listen(process.env.PORT, () => {
    console.log(`server started on localhost:${process.env.PORT}`);
  });
};

main().catch((e) => {
  console.error(e);
});
