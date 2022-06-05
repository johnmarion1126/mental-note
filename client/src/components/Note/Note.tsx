import { Box, Text } from '@chakra-ui/react';
import React from 'react';

const Note: React.FC = () => (
  <Box>
    <Text color="gray.600">Dear Person</Text>
    <Text
      my={3}
      textAlign="justify"
      style={{
        overflowX: 'hidden',
        overflow: 'scroll',
      }}
      h="200px"
      color="gray.600"
    >
      Aut officia est id quia.
      Facilis velit rem doloribus
      quisquam voluptatem. Animi
      ducimus aut nesciunt. Quae
      nam provident iusto consequatur
      unde accusamus facilis facere.
      Quidem deserunt inventore ut laboriosam.…
    </Text>
    <Text color="gray.600" textAlign="right">From,</Text>
    <Text color="gray.600" textAlign="right">John</Text>
  </Box>
);

export default Note;
