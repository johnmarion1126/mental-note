import { buildSchema } from 'type-graphql';
import { graphql } from 'graphql';
import NoteResolver from '../../resolvers/note';

interface Options {
  source: string;
  variableValues?: any;
}
const gqlCall = async ({ source, variableValues }: Options) => graphql({
  schema: await buildSchema({
    resolvers: [NoteResolver],
  }),
  source,
  variableValues,
});

export default gqlCall;
