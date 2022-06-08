/* eslint-disable no-promise-executor-return */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';

import { render } from '@testing-library/react';
import Note, { GET_NOTE_QUERY, NoteProps } from '../components/Note/Note';

const mocks: MockedResponse<Record<string, any>>[] = [{
  request: {
    query: GET_NOTE_QUERY,
    variables: {
      id: 1,
    },
  },
  result: () => {
    console.log('HITTT');
    return {
      data: {
        note: { name: 'John', text: 'Testing' },
      },
    };
  },
}];

const renderNote = (props: Partial<NoteProps> = {}) => {
  const defaultProps: NoteProps = {
    limit: 0,
    setIsWriting() {},
    id: 1,
  };
  return (<Note {...defaultProps} {...props} />);
};

test('queries a note', async () => {
  const component = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      {renderNote()}
    </MockedProvider>,
  );

  await new Promise((resolve) => setTimeout(resolve, 2000));
  component.debug();
});
