import { gql } from '@apollo/client';

export const COUNTRY_CURRENCY_QUERY = gql`
query GetCountryInfo($countryName: String!) {
    countries(where: { name: { _eq: $countryName } }) {
      name
      currency
    }
  }
  
`;

