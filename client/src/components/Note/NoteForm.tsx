import { Textarea, Text } from '@chakra-ui/react';
import React from 'react';

interface NoteFormProps {
  name: string
}

const NoteForm: React.FC<NoteFormProps> = ({
  name,
}) => (
  <>
    <Textarea
      borderColor="gray.300"
      h="200px"
      focusBorderColor="gray.300"
      mb={3}
      css={{
        '&::-webkit-scrollbar': {
          width: '8px',
        },
        '&::-webkit-scrollbar-track': {
          width: '10px',
        },
        '&::-webkit-scrollbar-thumb': {
          background: 'lightgray',
          borderRadius: '24px',
        },
      }}
    />
    <Text color="gray.600" textAlign="right">From,</Text>
    <Text color="gray.600" textAlign="right">{name}</Text>
  </>
);

export default NoteForm;
