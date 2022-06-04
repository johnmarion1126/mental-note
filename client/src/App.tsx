import React from 'react';
import { Center, ChakraProvider } from '@chakra-ui/react';
import '@fontsource/open-sans';
import '@fontsource/raleway';

import theme from './theme';
import Title from './components/Title';

const App: React.FC = () => (
  <ChakraProvider resetCSS theme={theme}>
    <Center h="calc(100vh)" bg="fifth" m="auto">
      <Title />
    </Center>
  </ChakraProvider>
);

export default App;
