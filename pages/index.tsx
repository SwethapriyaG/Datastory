import { useState } from 'react';
import { useQuery } from '@apollo/client';
import { Box, Input, Button, Text } from '@chakra-ui/react';
import { COUNTRY_CURRENCY_QUERY } from '../src/src/CountryCurrencyQuery';

import { GET_COUNTRY_CURRENCY } from '../src/src/queries.js';

import client from '../src/src/apollo/client';
const Home: React.FC = () => {
  const [countryName, setCountryName] = useState('');
  const { data, loading, error } = useQuery(GET_COUNTRY_CURRENCY, {
    variables: { countryName },
    skip: !countryName,
    client,
  });

  const handleSearch = async () => {
    try {
      const { data } = await client.query({
        query: COUNTRY_CURRENCY_QUERY,
        variables: { countryName },
      });

      console.log('Refetched data:', data);
    } catch (error) {
      console.error('Error fetching data:', error.message);
    }
  };

  return (
    <Box p={4}>
      <Input
        placeholder="Enter country name"
        value={countryName}
        onChange={(e) => setCountryName(e.target.value)}
        mb={2}
      />
      <Button mt={2} onClick={handleSearch} isLoading={loading} colorScheme="blue" color="green" backgroundColor={'white'}>
        Search
      </Button>
      
      {data?.item && data.item.length > 0 && data.item[0].nameEn && (
        <Box mt={4}>
          <Text>
            Currency of {data.item[0].nameEn}: {data.item[0].currency[0]?.object.nameEn}
          </Text>
        </Box>
      )}
      {error && <Text color="red.500">Error fetching data</Text>}
    </Box>
  );
};

export default Home;
