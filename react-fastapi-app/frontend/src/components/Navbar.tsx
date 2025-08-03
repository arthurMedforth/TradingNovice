import React from 'react';
import { Box, Flex, Link, Heading } from '@chakra-ui/react';
import { Link as RouterLink } from 'react-router-dom';

const Navbar: React.FC = () => {
  return (
    <Flex bg="blue.500" p={4} color="white" alignItems="center">
      <Heading size="md" mr={8}>Trading App</Heading>
      <Box mr={4}>
        <Link as={RouterLink} to="/">Home</Link>
      </Box>
      <Box>
        <Link as={RouterLink} to="/trading">Trading</Link>
      </Box>
    </Flex>
  );
};

export default Navbar;