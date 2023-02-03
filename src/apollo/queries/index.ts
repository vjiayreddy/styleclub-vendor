import { gql } from "@apollo/client";
import {
  PERSONALIZE_SCREENS,
  MASTER_PRODUCT_SINGLE_SELECT,
  MASTER_CATEGORIES,
  PRODUCT,
  LOOKS,
  BRAND_PARTNER,
} from "../fragments";

export const GQL_VENDOR_LOGIN = gql`
  query VendorLogin($password: String!, $email: String, $phone: String) {
    vendorLogin(password: $password, email: $email, phone: $phone) {
      token
    }
  }
`;
export const GQL_VALIDATE_VENDOR_PHONE_VERIFICATION = gql`
  query ValidateVendorPhoneVerificationOtp($otp: String!, $userId: String!) {
    validateVendorPhoneVerificationOtp(otp: $otp, userId: $userId) {
      _id
    }
  }
`;
export const GQL_VENDOR_INITIATE_PHONE_VERIFICATION = gql`
  query InitiateVendorPhoneVerification($phone: String!) {
    initiateVendorPhoneVerification(phone: $phone) {
      _id
    }
  }
`;
export const GQL_GET_VENDORS_BY_FILTER = gql`
  ${BRAND_PARTNER}
  query GetVendorsByFilter($limit: Int!, $page: Int!, $filter: VendorFilter) {
    getVendorsByFilter(limit: $limit, page: $page, filter: $filter) {
      totalCount
      vendors {
        _id
        title
        address
        city
        country
        currentStatus
        gstNo
        name
        pinCode
        brandPartner{
          ...BrandPartner
        }
        state
        status {
          note
          type
        }
      }
    }
  }
`;
export const GQL_USER_LOGIN = gql`
  query Login($password: String!, $email: String, $phone: String) {
    login(password: $password, email: $email, phone: $phone) {
      token
    }
  }
`;
export const GQL_USER_REGISTER = gql`
  mutation RegisterUser($user: RegisterUserInput!) {
    registerUser(user: $user) {
      _id
    }
  }
`;
export const GET_PERSONALIZE_FORM_BY_ID = gql`
  ${PERSONALIZE_SCREENS}
  query GetPersonalizeForm($filter: PersonalizeFormFilterInput) {
    getPersonalizeForm(filter: $filter) {
      dependencyFormIds
      name
      label
      userSelections {
        master_name
        value
      }
      screens {
        ...PersonalizeScreens
      }
    }
  }
`;
export const GET_USER_SUBSCRIPTION_BY_ID = gql`
  query GetSubscriptionsByUserId($userId: String!) {
    getSubscriptionsByUserId(userId: $userId) {
      _id
      serviceProductId
      serviceProductOrderId
    }
  }
`;
export const GET_USER_PRODUCT_RECOMMENDED_ATTRIBUTES = gql`
  ${MASTER_PRODUCT_SINGLE_SELECT}
  query GetUserProductRecommendedAttributes(
    $filter: UserSelectionFilterInput!
  ) {
    getUserProductRecommendedAttributes(filter: $filter) {
      _id
      master_name
      note
      palletData {
        colors {
          hashCode
          name
          primaryColorId
          secondaryColorId
          _id
        }
      }
      masterData {
        ...MasterData
      }
    }
  }
`;
export const GET_ALL_OCCASIONS = gql`
  ${MASTER_CATEGORIES}
  query GetAllOccasions {
    getAllOccasions {
      _id
      label
      name
      categories {
        ...MasterCategories
      }
    }
  }
`;
export const GET_PRODUCT_ATTRIBUTES = gql`
  query GetProductAttributeMaster($filter: ProductAttributeMasterFilter) {
    getProductAttributeMaster(filter: $filter) {
      _id
      name
      image
      note
      category {
        _id
        image
        name
        note
        personalizeImage
      }
    }
  }
`;
export const GET_USER_PERSONALIZE_CONFIG = gql`
  query GetUserPersonalizePageConfig($catId: String!) {
    getUserPersonalizePageConfig(catId: $catId) {
      catId
      note
      attributes {
        master_name
        note
        label
      }
      looks {
        label
        description
      }
      curated_products {
        label
        description
      }
    }
  }
`;
export const GET_USER_PERSONALIZED_PRODUCTS = gql`
  ${PRODUCT}
  query GetPersonalizedProducts(
    $limit: Int
    $page: Int
    $params: ProductRecFilterInput!
  ) {
    getPersonalizedProducts(limit: $limit, page: $page, params: $params) {
      totalItemCount
      products {
        ...Product
      }
    }
  }
`;
export const GET_PERSONALIZED_LOOKS_BY_PRODUCTS = gql`
  ${LOOKS}
  query GetPersonalizedLooksByProducts(
    $limit: Int
    $page: Int
    $params: LookRecFilterInput!
  ) {
    getPersonalizedLooksByProducts(
      limit: $limit
      page: $page
      params: $params
    ) {
      looks {
        ...Look
      }
    }
  }
`;
export const GET_ALL_BRAND_PARTNERS = gql`
  query GetAllBrandPartnerCategories {
    getAllBrandPartnerCategories {
      _id
      name
      title
    }
  }
`;
export const GQL_BRAND_PARTNER_REGISTER = gql`
  mutation RegisterBrandPartner($body: BrandPartnerInput!) {
    registerBrandPartner(body: $body) {
      _id
    }
  }
`;
export const GQL_VENDOR_REGISTER = gql`
  mutation RegisterVendor($vendorInput: VendorInput) {
    registerVendor(vendorInput: $vendorInput) {
      _id
    }
  }
`;
export const GQL_VENDOR_MANAGER_REGISTER = gql`
  mutation RegisterVendorManager(
    $vendorManager: RegisterVendorManagerUserInput!
  ) {
    registerVendorManager(vendorManager: $vendorManager) {
      _id
    }
  }
`;
export const GET_REACTIVE_VENDOR_ONBOARD_FORM = gql`
  query ReactiveVendorOnBoardFormState {
    reactiveVendorOnBoardFormState @client
  }
`;
