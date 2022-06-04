import React from 'react';
import { Center, ChakraProvider } from '@chakra-ui/react';

import theme from './theme';
import Title from './components/Title';

const App: React.FC = () => (
  <ChakraProvider resetCSS theme={theme}>
    <Center h="calc(100vh)">
      <Title />
    </Center>
  </ChakraProvider>
);

export default App;
