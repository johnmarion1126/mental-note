import { EmailIcon } from '@chakra-ui/icons';
import {
  Box, Fade, Flex, IconButton, Text, useDisclosure,
} from '@chakra-ui/react';
import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { useNoteQuery } from '../../generated/graphql';

interface NoteProps {
  limit: number
  setIsWriting: Dispatch<SetStateAction<boolean>>
  onToggle: () => void
}

const Note: React.FC<NoteProps> = ({
  limit,
  setIsWriting,
  onToggle,
}) => {
  const { data } = useNoteQuery({ variables: { noteId: Math.floor(Math.random() * limit) } });

  const { isOpen, onToggle: toggleBtns } = useDisclosure();

  const handleAnimations = () => {
    onToggle();
    toggleBtns();
  };

  const handleClick = () => {
    handleAnimations();
    setTimeout(() => setIsWriting(true), 1000);
  };

  useEffect(() => {
    onToggle();
    toggleBtns();
  }, []);

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
      <Fade in={isOpen}>
        <Flex position="absolute" bottom={-90} right={168}>
          <IconButton
            icon={<EmailIcon w="5" h="5" />}
            aria-label="create note"
            colorScheme="second"
            borderRadius="full"
            bg="second"
            onClick={handleClick}
          />
        </Flex>
      </Fade>
    </>
  );
};

export default Note;
