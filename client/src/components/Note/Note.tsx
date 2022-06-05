import { EmailIcon } from '@chakra-ui/icons';
import {
  Box, Flex, IconButton, Text,
} from '@chakra-ui/react';
import React, { Dispatch, SetStateAction } from 'react';
import { useNoteQuery } from '../../generated/graphql';

interface NoteProps {
  limit: number
  setIsWriting: Dispatch<SetStateAction<boolean>>
}

const Note: React.FC<NoteProps> = ({
  limit,
  setIsWriting,
}) => {
  const { data } = useNoteQuery({ variables: { noteId: Math.floor(Math.random() * limit) + 1 } });

  return (
    <>
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
      <Flex position="absolute" bottom={-90} right={168}>
        <IconButton
          icon={<EmailIcon w="5" h="5" />}
          aria-label="submit note"
          colorScheme="second"
          borderRadius="full"
          bg="second"
          onClick={() => {
            setIsWriting(true);
          }}
        />
      </Flex>
    </>
  );
};

export default Note;
