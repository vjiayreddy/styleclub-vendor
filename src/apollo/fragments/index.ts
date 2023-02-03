import { gql } from "@apollo/client";
export const PERSONALIZE_SCREENS = gql`
  fragment PersonalizeScreens on PersonalizeFormScreen {
    questions {
      questionId
      question {
        type
        value
        input
        catId
        description
        optionTypeId
        infoHelpText
        isMandatory
        isMultipleChoice
        master_name
        optionsData {
          _id
          name
          image
        }
      }
    }
  }
`;

export const MASTER_PRODUCT_SINGLE_SELECT = gql`
  fragment MasterData on MasterProductSingleSelect {
    _id
    catId
    image
    name
    note
    personalizeImage
    sortOrder
  }
`;

export const MASTER_CATEGORIES = gql`
  fragment MasterCategories on MasterCategory {
    _id
    image
    isEnabled
    isEnabledForPersonalize
    label
    name
    personalizeImage
    personalizeNote
  }
`;

export const PRODUCT = gql`
  fragment Product on Product {
    _id
    images
    name
    price
  }
`;

export const LOOKS = gql`
  ${PRODUCT}
  fragment Look on Look {
    _id
    images
    name
    price
    products {
      ...Product
    }
  }
`;

export const VENDOR_USER = gql`
  fragment VendorUser on VendorUser {
    _id
    isEmailVerified
    isMobileVerified
  }
`;
export const BRAND_PARTNER = gql`
  fragment BrandPartner on BrandPartnerSchema {
    _id
    brandPartnerCategory {
      name
      title
    }
    brandPartnerNo
    name
    note
    url
    title
  }
`;
