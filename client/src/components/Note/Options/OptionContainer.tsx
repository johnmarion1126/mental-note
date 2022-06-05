import React from 'react';
import { Flex, IconButton } from '@chakra-ui/react';
import { ChevronUpIcon, RepeatIcon } from '@chakra-ui/icons';

const OptionContainer: React.FC = () => (
  <Flex justifyContent="center" gap={4} mt={10}>
    <IconButton
      icon={<RepeatIcon w="5" h="5" />}
      aria-label="submit note"
      colorScheme="second"
      borderRadius="full"
      bg="gray.500"
    />
    <IconButton
      icon={<ChevronUpIcon w="10" h="10" />}
      aria-label="submit note"
      colorScheme="second"
      borderRadius="full"
      bg="second"
    />
  </Flex>
);

export default OptionContainer;
