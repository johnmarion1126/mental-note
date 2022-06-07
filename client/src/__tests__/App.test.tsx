/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';

import Note, { NoteProps } from '../components/Note/Note';
import NoteForm, { NoteFormProps } from '../components/Note/NoteForm';

const mocks: MockedResponse<Record<string, any>>[] | undefined = [];

const renderNote = (props: Partial<NoteProps> = {}) => {
  const defaultProps: NoteProps = {
    limit: 0,
    setIsWriting() {},
  };
  return (<Note {...defaultProps} {...props} />);
};

const renderNoteForm = (props: Partial<NoteFormProps> = {}) => {
  const defaultProps: NoteFormProps = {
    name: '',
    setIsWriting() {},
    setLimit() {},
  };
  return (<NoteForm {...defaultProps} {...props} />);
};

test('render note', () => {
  const component = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      {renderNote()}
    </MockedProvider>,
  );
  const note = component.getByTestId('note');
  expect(note).toBeDefined();
});

test('render note form', () => {
  const component = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      {renderNoteForm()}
    </MockedProvider>,
  );
  const note = component.getByTestId('note-form');
  expect(note).toBeDefined();
});
