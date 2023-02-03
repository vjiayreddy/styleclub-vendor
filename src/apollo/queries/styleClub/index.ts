import { gql } from "@apollo/client";

export const GET_ALL_BRAND_PARTNERS = gql`
  query GetAllBrandPartners(
    $limit: Int!
    $page: Int!
    $filters: BrandPartnersFilterInput
  ) {
    getAllBrandPartners(limit: $limit, page: $page, filters: $filters) {
      brandPartners {
        brandPartnerCategory
      }
      totalCount
    }
  }
`;
