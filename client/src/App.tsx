import React, { useState } from 'react';
import { Center, ChakraProvider, Flex } from '@chakra-ui/react';
import '@fontsource/open-sans';
import '@fontsource/raleway';

import theme from './theme';
import Title from './components/Title';
import NameInput from './components/NameInput';
import NoteContainer from './components/Note/NoteContainer';

const App: React.FC = () => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [name, setName] = useState<string>('');

  return (
    <ChakraProvider resetCSS theme={theme}>
      <Center h="calc(100vh)" bg="fifth" m="auto">
        {
          !isSignedIn ? (
            <Flex flexDir="column">
              <Title />
              <NameInput
                setIsSignedIn={setIsSignedIn}
                setName={setName}
              />
            </Flex>
          ) : (
            <NoteContainer name={name} />
          )
        }
      </Center>
    </ChakraProvider>
  );
};

export default App;
