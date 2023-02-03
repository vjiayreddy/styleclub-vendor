import { gql } from "@apollo/client";
export const PERSONALIZE_SCREENS = gql`
  fragment BrandPartnerCategory on BrandPartnerCategorySchema {
    _id
    isAvailable
    name
    note
    subCategory {
      _id
      isAvailable
      name
      note
      title
    }
    title
  }
`;
