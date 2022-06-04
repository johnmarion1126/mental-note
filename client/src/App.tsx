import React from 'react';
import { Center, ChakraProvider, Flex } from '@chakra-ui/react';
import '@fontsource/open-sans';
import '@fontsource/raleway';

import theme from './theme';
import Title from './components/Title';
import NameInput from './components/NameInput';

const App: React.FC = () => (
  <ChakraProvider resetCSS theme={theme}>
    <Center h="calc(100vh)" bg="fifth" m="auto">
      <Flex flexDir="column">
        <Title />
        <NameInput />
      </Flex>
    </Center>
  </ChakraProvider>
);

export default App;
