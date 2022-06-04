import { Resolver, Query } from 'type-graphql';
import Note from '../entities/Note';

@Resolver()
class NoteResolver {
  @Query(() => [Note])
  async notes(): Promise<Note[]> {
    return Note.find();
  }
}

export default NoteResolver;
