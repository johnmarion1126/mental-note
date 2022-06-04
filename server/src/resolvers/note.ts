import {
  Resolver, Query, Arg, Int, InputType, Field, Mutation,
} from 'type-graphql';
import Note from '../entities/Note';

@InputType()
class NoteInput {
  @Field(() => String)
    name: string;

  @Field(() => String)
    text: string;
}
@Resolver()
class NoteResolver {
  @Query(() => [Note])
  async notes(): Promise<Note[]> {
    return Note.find();
  }

  @Query(() => Note, { nullable: true })
  post(@Arg('id', () => Int) id: number): Promise<Note | null> {
    return Note.findOne({ where: { id } });
  }

  @Mutation(() => Note)
  async createPost(
    @Arg('input', () => NoteInput) input: NoteInput,
  ) : Promise<Note> {
    return Note.create({
      ...input,
    }).save();
  }
}

export default NoteResolver;
