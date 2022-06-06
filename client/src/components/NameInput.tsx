import React, {
  ChangeEvent,
  Dispatch, KeyboardEvent, SetStateAction, useState,
} from 'react';
import {
  Box, FormControl, Input,
} from '@chakra-ui/react';

interface NameInputProps {
  setIsSignedIn: Dispatch<SetStateAction<boolean>>;
  setName: Dispatch<SetStateAction<string>>;
}

const NameInput: React.FC<NameInputProps> = ({
  setIsSignedIn,
  setName,
}) => {
  const [error, setError] = useState<string | null>(null);
  const [input, setInput] = useState<string>('');

  const handleSubmit = (event: KeyboardEvent<HTMLInputElement>) => {
    const target = event.target as HTMLInputElement;
    if (event.key === 'Enter') {
      if (target.value === '') {
        setError('Please enter a name');
      } else {
        setError('');
        setName(target.value);
        setIsSignedIn((prevVal) => !prevVal);
      }
    }
  };

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setInput(event.target.value);
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
        onChange={handleChange}
        value={input}
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
