import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';

import dataSource from './dataSource';
import { PORT, URL } from './utils/constants';
import HelloResolver from './resolvers/hello';
import NoteResolver from './resolvers/note';

const main = async () => {
  await dataSource.initialize();
  await dataSource.runMigrations();
  const app = express();

  console.log(URL);

  app.use(
    cors({
      origin: [
        URL as string,
        'https://studio.apollographql.com'],
      credentials: true,
    }),
  );

  const apolloServer = new ApolloServer({
    schema: await buildSchema({
      resolvers: [
        HelloResolver,
        NoteResolver,
      ],
    }),
  });

  await apolloServer.start();
  apolloServer.applyMiddleware({ app });

  app.listen(PORT, () => {
    console.log(`server started on localhost:${PORT}`);
  });
};

main().catch((e) => {
  console.error(e);
});
