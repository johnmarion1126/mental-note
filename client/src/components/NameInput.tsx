import React from 'react';
import { Input } from '@chakra-ui/react';

const NameInput: React.FC = () => (
  <Input
    fontWeight="light"
    placeholder="Enter your name"
    textAlign="center"
    focusBorderColor="second"
    borderColor="gray.300"
    variant="flushed"
    px={4}
  />
);

export default NameInput;
