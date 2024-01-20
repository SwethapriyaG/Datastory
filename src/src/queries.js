
import { gql } from '@apollo/client';

export const GET_COUNTRY_CURRENCY = gql`
  query GetCountryCurrency($countryName: String!) {
    item(where: { class_id: { _eq: "Country" }, nameEn: { _eq: $countryName } }) {
      nameEn
      currency: statements(where: { property_id: { _eq: "currency" } }) {
        object {
          nameEn
        }
      }
    }
  }
`;
