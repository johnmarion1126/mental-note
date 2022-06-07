import React, { Dispatch, SetStateAction, useEffect } from 'react';
import { EmailIcon } from '@chakra-ui/icons';
import {
  Fade, IconButton, Slide, Text, useDisclosure,
} from '@chakra-ui/react';

import { useNoteQuery } from '../../generated/graphql';
import NoteWrapper from './NoteWrapper';

export interface NoteProps {
  setIsWriting: Dispatch<SetStateAction<boolean>>
  limit: number
}

const Note: React.FC<NoteProps> = ({
  setIsWriting,
  limit,
}) => {
  const { data } = useNoteQuery({ variables: { noteId: Math.floor(Math.random() * limit) } });

  const { isOpen: isBtnOpen, onToggle: onBtnToggle } = useDisclosure();
  const { isOpen: isFormOpen, onToggle: onFormToggle } = useDisclosure();

  const toggleAnimations = () => {
    onBtnToggle();
    onFormToggle();
  };

  const handleClick = () => {
    toggleAnimations();
    setTimeout(() => setIsWriting((prevVal) => !prevVal), 1000);
  };

  useEffect(() => {
    toggleAnimations();
  }, []);

  return (
    <>
      <Slide direction="top" in={isFormOpen}>
        <NoteWrapper>
          <Text
            data-testid="note"
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
        </NoteWrapper>
      </Slide>
      <Fade in={isBtnOpen}>
        <IconButton
          icon={<EmailIcon w="5" h="5" />}
          aria-label="create note"
          colorScheme="second"
          borderRadius="full"
          bg="second"
          mt={500}
          onClick={handleClick}
        />
      </Fade>
    </>
  );
};

export default Note;
