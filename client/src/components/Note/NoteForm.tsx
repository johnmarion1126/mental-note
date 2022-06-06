import React, {
  ChangeEvent, Dispatch, SetStateAction, useEffect, useState,
} from 'react';
import { ChevronUpIcon, RepeatIcon } from '@chakra-ui/icons';
import {
  Textarea, Text, Flex, IconButton, useDisclosure, Fade,
} from '@chakra-ui/react';
import { useCreateNoteMutation } from '../../generated/graphql';

interface NoteFormProps {
  name: string
  setIsWriting: Dispatch<SetStateAction<boolean>>
  setLimit: Dispatch<SetStateAction<number>>
  onToggle: () => void
}

const NoteForm: React.FC<NoteFormProps> = ({
  name,
  setIsWriting,
  setLimit,
  onToggle,
}) => {
  const [createNote] = useCreateNoteMutation();
  const [text, setText] = useState<string>('');

  const { isOpen, onToggle: toggleBtns } = useDisclosure();

  useEffect(() => {
    onToggle();
    toggleBtns();
  }, []);

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const handleAnimations = () => {
    onToggle();
    toggleBtns();
  };

  const hanldeSumbit = async () => {
    handleAnimations();
    const result = await createNote({ variables: { input: { name, text } } });
    setLimit((result.data?.createNote.id) as number);
    setTimeout(() => setIsWriting(false), 1000);
  };

  return (
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
        value={text}
        onChange={handleChange}
      />
      <Text color="gray.600" textAlign="right">From,</Text>
      <Text color="gray.600" textAlign="right">{name}</Text>
      <Fade in={isOpen}>
        <Flex gap={4} position="absolute" bottom={-90} right={141}>
          <IconButton
            icon={<RepeatIcon w="5" h="5" />}
            aria-label="reset note"
            colorScheme="second"
            borderRadius="full"
            bg="gray.500"
            onClick={() => {
              setText('');
            }}
          />
          <IconButton
            icon={<ChevronUpIcon w="10" h="10" />}
            aria-label="submit note"
            colorScheme="second"
            borderRadius="full"
            bg="second"
            onClick={hanldeSumbit}
          />
        </Flex>
      </Fade>
    </>
  );
};

export default NoteForm;
