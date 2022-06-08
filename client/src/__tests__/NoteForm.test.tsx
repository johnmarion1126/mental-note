/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';

import NoteForm, { NoteFormProps } from '../components/Note/NoteForm';

const mocks: MockedResponse<Record<string, any>>[] | undefined = [];

const renderNoteForm = (props: Partial<NoteFormProps> = {}) => {
  const defaultProps: NoteFormProps = {
    name: '',
    setIsWriting() {},
    setLimit() {},
  };
  return (<NoteForm {...defaultProps} {...props} />);
};

test('render note form', () => {
  const component = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      {renderNoteForm()}
    </MockedProvider>,
  );
  const note = component.getByTestId('note-form');
  expect(note).toBeDefined();
});
