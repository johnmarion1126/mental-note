/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { render } from '@testing-library/react';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import Note, { NoteProps } from '../components/Note/Note';

const mocks: MockedResponse<Record<string, any>>[] | undefined = [];

const renderNote = (props: Partial<NoteProps> = {}) => {
  const defaultProps: NoteProps = {
    limit: 0,
    setIsWriting() {},
  };
  return (<Note {...defaultProps} {...props} />);
};

test('render note', () => {
  const component = render(
    <MockedProvider mocks={mocks} addTypename={false}>
      {renderNote()}
    </MockedProvider>,
  );
  const note = component.getByTestId('note');
  expect(note).toBeTruthy();
});
