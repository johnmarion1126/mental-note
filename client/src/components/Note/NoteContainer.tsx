import { Box } from '@chakra-ui/react';
import React from 'react';

const NoteContainer: React.FC = () => (
  <Box
    bg="white"
    w="calc(55vh)"
    h="calc(65vh)"
    dropShadow="outline"
    style={{
      filter: 'drop-shadow(0px 0px 20px rgba(0,0,0,0.25))',
    }}
  />
);

export default NoteContainer;
