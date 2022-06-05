import React, { useState } from 'react';
import { Box, Flex, Text } from '@chakra-ui/react';

import Note from './Note';
import NoteForm from './NoteForm';

interface NoteContainerProps {
  name: string
}

const NoteContainer: React.FC<NoteContainerProps> = ({
  name,
}) => {
  // eslint-disable-next-line no-unused-vars
  const [isWriting, setIsWriting] = useState<boolean>(false);

  return (
    <Flex flexDir="column">
      <Box
        bg="white"
        w="calc(55vh)"
        h="calc(50vh)"
        dropShadow="outline"
        style={{
          filter: 'drop-shadow(0px 0px 20px rgba(0,0,0,0.25))',
        }}
        px={8}
        py={6}
      >
        <Text color="gray.600" mb={3}>Hello World!</Text>
        {!isWriting
          ? <Note setIsWriting={setIsWriting} />
          : <NoteForm name={name} setIsWriting={setIsWriting} />}
      </Box>
    </Flex>
  );
};

export default NoteContainer;
