import React from 'react';
import {
  Box, Flex, Text,
} from '@chakra-ui/react';

interface NoteWrapperProps {
  children: React.ReactNode
}

const NoteWrapper: React.FC<NoteWrapperProps> = ({
  children,
}) => (
  <Flex bg="fifth" justifyContent="center">
    <Flex flexDir="column" justifyContent="center" pt={135}>
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
        {children}
      </Box>
    </Flex>
  </Flex>
);

export default NoteWrapper;
