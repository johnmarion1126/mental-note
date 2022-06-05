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
  note(@Arg('id', () => Int) id: number): Promise<Note | null> {
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

  @Mutation(() => Boolean)
  async updatePost(
    @Arg('id', () => Int) id: number,
    @Arg('text', () => String, { nullable: true }) text: string,
  ) : Promise<boolean> {
    const note = await Note.findOne({ where: { id } });
    if (!note) {
      return false;
    }
    if (typeof text !== 'undefined') {
      await Note.update({ id }, { text });
    }
    return true;
  }

  @Mutation(() => Boolean)
  async deletePost(@Arg('id') id: number): Promise<boolean> {
    await Note.delete(id);
    return true;
  }
}

export default NoteResolver;
