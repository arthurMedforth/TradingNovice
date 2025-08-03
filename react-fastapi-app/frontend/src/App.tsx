import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Box, Container, Heading } from '@chakra-ui/react';
import StockList from './components/StockList';

const App: React.FC = () => {
  return (
    <Box>
      <Container maxW="container.xl" py={4}>
        <Heading mb={4}>Trading App</Heading>
        <Routes>
          <Route path="/" element={<StockList />} />
        </Routes>
      </Container>
    </Box>
  );
};

export default App;