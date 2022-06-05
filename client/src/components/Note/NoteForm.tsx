import React, {
  ChangeEvent, Dispatch, SetStateAction, useState,
} from 'react';
import { ChevronUpIcon, RepeatIcon } from '@chakra-ui/icons';
import {
  Textarea, Text, Flex, IconButton,
} from '@chakra-ui/react';
import { useCreateNoteMutation } from '../../generated/graphql';

interface NoteFormProps {
  name: string
  setIsWriting: Dispatch<SetStateAction<boolean>>
  setLimit: Dispatch<SetStateAction<number>>
}

const NoteForm: React.FC<NoteFormProps> = ({
  name,
  setIsWriting,
  setLimit,
}) => {
  const [createNote] = useCreateNoteMutation();
  const [text, setText] = useState<string>('');

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setText(event.target.value);
  };

  const hanldeSumbit = async () => {
    const result = await createNote({ variables: { input: { name, text } } });
    setLimit((result.data?.createNote.id) as number);
    setIsWriting(false);
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
    </>
  );
};

export default NoteForm;
