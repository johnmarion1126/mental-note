import 'reflect-metadata';
import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { buildSchema } from 'type-graphql';

import dataSource from './dataSource';
import { PORT } from './utils/constants';
import HelloResolver from './resolvers/hello';
import NoteResolver from './resolvers/note';

const main = async () => {
  await dataSource.initialize();
  const app = express();

  app.use(
    cors({
      origin: ['http://localhost:3000', 'https://studio.apollographql.com'],
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
