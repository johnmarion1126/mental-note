import { Textarea, Text } from '@chakra-ui/react';
import React from 'react';

const NoteForm: React.FC = () => (
  <>
    <Textarea
      borderColor="gray.300"
      h="200px"
      focusBorderColor="gray.300"
      mb={3}
    />
    <Text color="gray.600" textAlign="right">From,</Text>
    <Text color="gray.600" textAlign="right">John</Text>
  </>
);

export default NoteForm;
