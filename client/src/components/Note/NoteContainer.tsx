import React from 'react';
import { Box } from '@chakra-ui/react';

import Note from './Note';

const NoteContainer: React.FC = () => (
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
    <Note />
  </Box>
);

export default NoteContainer;
