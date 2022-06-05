import { Box, Text } from '@chakra-ui/react';
import React from 'react';
import { useNoteQuery } from '../../generated/graphql';

const Note: React.FC = () => {
  const { data } = useNoteQuery({ variables: { noteId: 2 } });

  return (

    <Box>
      <Text
        mb={3}
        textAlign="justify"
        h="200px"
        color="gray.600"
        px={3}
        style={{
          overflowY: 'scroll',
        }}
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
      >
        {data?.note?.text}
      </Text>
      <Text color="gray.600" textAlign="right">From,</Text>
      <Text color="gray.600" textAlign="right">{data?.note?.name}</Text>
    </Box>
  );
};

export default Note;
