import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';

const Home: React.FC = () => {
  return (
    <Box>
      <Heading mb={4}>Welcome to Trading App</Heading>
      <Text>Start your trading journey here.</Text>
    </Box>
  );
};

export default Home;