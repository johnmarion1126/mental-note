import { DataSource } from 'typeorm';
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

describe('Note', () => {
  it('create note', async () => {
    const userInput = {
      name: 'John',
      text: 'Hello World',
    };

    const res = await gqlCall({
      source: createNote,
      variableValues: {
        input: userInput,
      },
    });

    expect(res).toMatchObject({
      data: {
        createNote: {
          id: 1,
        },
      },
    });
  });
});
