import React, { KeyboardEvent, useState } from 'react';
import {
  Box, FormControl, Input,
} from '@chakra-ui/react';

const NameInput: React.FC = () => {
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (event: KeyboardEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    if (event.key === 'Enter') {
      if (target.value === '') {
        setError('Please enter a name');
      } else {
        setError('');
      }
    } else {
      console.log(target.value);
    }
  };

  return (
    <FormControl isInvalid={!!error}>
      <Input
        fontWeight="light"
        placeholder="Enter your name"
        textAlign="center"
        errorBorderColor="red.300"
        focusBorderColor={!error ? 'gray.300' : 'red.300'}
        borderColor="gray.300"
        variant="flushed"
        px={4}
        onKeyDown={handleSubmit}
      />
      { error
        && (
          <Box
            textAlign="center"
            color="red.300"
            fontWeight="normal"
            mt={3}
          >
            {error}
          </Box>
        )}
    </FormControl>
  );
};

export default NameInput;
