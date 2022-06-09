import React, { useState } from 'react';
import {
  Center, ChakraProvider, Flex,
} from '@chakra-ui/react';
import '@fontsource/open-sans';
import '@fontsource/raleway';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

import theme from './theme';
import Title from './components/Title';
import NameForm from './components/NameForm';
import NoteForm from './components/Note/NoteForm';
import Note from './components/Note/Note';

const client = new ApolloClient({
  uri: import.meta.env.VITE_URI,
  cache: new InMemoryCache(),
});

const App: React.FC = () => {
  const [isSignedIn, setIsSignedIn] = useState<boolean>(false);
  const [isWriting, setIsWriting] = useState<boolean>(true);
  const [limit, setLimit] = useState<number>(0);
  const [name, setName] = useState<string>('');

  return (
    <ApolloProvider client={client}>
      <ChakraProvider resetCSS theme={theme}>
        <Center h="calc(100vh)" bg="fifth" m="auto" pb={20}>
          {
          !isSignedIn ? (
            <Flex flexDir="column">
              <Title />
              <NameForm
                setIsSignedIn={setIsSignedIn}
                setName={setName}
              />
            </Flex>
          ) : (
            isWriting ? (
              <NoteForm
                name={name}
                setLimit={setLimit}
                setIsWriting={setIsWriting}
              />
            ) : (
              <Note
                limit={limit}
                setIsWriting={setIsWriting}
              />
            )
          )
        }
        </Center>
      </ChakraProvider>
    </ApolloProvider>
  );
};

export default App;
