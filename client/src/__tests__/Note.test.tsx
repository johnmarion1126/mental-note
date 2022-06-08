/* eslint-disable no-promise-executor-return */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';

import { render, waitFor } from '@testing-library/react';
import Note, { NoteProps } from '../components/Note/Note';
import { NoteDocument } from '../generated/graphql';

const mocks: MockedResponse<Record<string, any>>[] = [{
  request: {
    query: NoteDocument,
    variables: {
      id: 1,
    },
  },
  result: () => ({
    data: {
      note: { name: 'John', text: 'Testing' },
    },
  }),
}];

const renderNote = (props: Partial<NoteProps> = {}) => {
  const defaultProps: NoteProps = {
    limit: 0,
    setIsWriting() {},
    id: 1,
  };
  return (<Note {...defaultProps} {...props} />);
};

test('query note', async () => {
  const component = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      {renderNote()}
    </MockedProvider>,
  );

  await waitFor(() => {
    const noteName = component.getByTestId('note-name');
    const noteText = component.getByTestId('note-text');
    expect(noteName.textContent).toEqual('John');
    expect(noteText.textContent).toEqual('Testing');
  });
});
