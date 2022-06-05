import React, { useState } from 'react';
import { Center, ChakraProvider, Flex } from '@chakra-ui/react';
import '@fontsource/open-sans';
import '@fontsource/raleway';

import theme from './theme';
import Title from './components/Title';
import NameInput from './components/NameInput';

const App: React.FC = () => {
  // eslint-disable-next-line no-unused-vars
  const [isSignedIn, setIsSignedIn] = useState(false);

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Center h="calc(100vh)" bg="fifth" m="auto">
        {
          !isSignedIn ? (
            <Flex flexDir="column">
              <Title />
              <NameInput />
            </Flex>
          ) : (
            <div>Signed In</div>
          )
        }
      </Center>
    </ChakraProvider>
  );
};

export default App;
