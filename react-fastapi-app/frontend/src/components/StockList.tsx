import React, { useEffect, useState } from 'react';
import { Box, Table, Thead, Tbody, Tr, Th, Td } from '@chakra-ui/react';

interface Stock {
  symbol: string;
  price: number;
}

const StockList: React.FC = () => {
  const [stocks, setStocks] = useState<Stock[]>([]);

  useEffect(() => {
    const fetchStocks = async () => {
      try {
        const response = await fetch('http://localhost:8000/api/trading-data');
        const data = await response.json();
        setStocks(data.stocks);
      } catch (error) {
        console.error('Error fetching stocks:', error);
      }
    };

    fetchStocks();
  }, []);

  return (
    <Box>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>Symbol</Th>
            <Th>Price</Th>
          </Tr>
        </Thead>
        <Tbody>
          {stocks.map((stock) => (
            <Tr key={stock.symbol}>
              <Td>{stock.symbol}</Td>
              <Td>${stock.price}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default StockList;