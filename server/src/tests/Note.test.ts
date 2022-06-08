import { DataSource } from 'typeorm';
import Note from '../entities/Note';
import gqlCall from './testUtils/gqlCall';
import { testSource } from './testUtils/testSource';

let conn: DataSource;

beforeAll(async () => {
  conn = await testSource();
});

afterAll(async () => {
  await conn.destroy();
});

const createNote = `
mutation CreateNote($input: NoteInput!) {
  createNote(input: $input) {
    id
  }
}
`;

const fetchNote = `
query($id: Int!) {
  note(id: $id) {
    name
  }
}
`;

const updateNote = `
  mutation($id: Int!, $text: String) {
  updateNote(id: $id, text: $text)
}
`;

const testId = 1;
const testInput = {
  name: 'John',
  text: 'Hello World',
};

describe('Note', () => {
  it('create note', async () => {
    const res = await gqlCall({
      source: createNote,
      variableValues: {
        input: testInput,
      },
    });

    expect(res).toMatchObject({
      data: {
        createNote: {
          id: 1,
        },
      },
    });

    const note = await Note.findOne({ where: { id: testId } });
    expect(note).toBeDefined();
  });

  it('fetch note', async () => {
    const res = await gqlCall({
      source: fetchNote,
      variableValues: {
        id: testId,
      },
    });

    const resName = res.data?.note?.name;
    expect(resName).toEqual('John');
  });

  it('update note', async () => {
    await gqlCall({
      source: updateNote,
      variableValues: {
        id: testId,
        text: 'Heyyo',
      },
    });

    const note = await Note.findOne({ where: { id: testId } });
    expect(note?.text).toEqual('Heyyo');
  });
});
