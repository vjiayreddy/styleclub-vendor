export type footerLinkType = { name: string };
export type gqlLoginResponse = {
  token: string;
};
export type gqlRegisterResponse = {
  token: string;
};
export type cartShippingType = {
  subTotal: string | number;
  shippingAddress: string;
  totalAmount: string | number;
};

export type checkBoxGroupOptions = {
  name: string;
  id?: string | number;
  image?: string;
  _id: string;
};

export type personalizeFormFilterType = {
  Id: string;
  isEdit?: boolean;
  name?: string;
  questionId?: string;
  userId?: string;
};

export type personalizeScreenOptionsDataType = {
  _id: string | null;
  image: string;
  name: string;
};

export type personalizeScreenQuestionType = {
  _id: string | null;
  catId: string | null;
  categoryId: string | null;
  description: string;
  infoHelpText: string;
  input: string;
  isMandatory: boolean;
  isMultipleChoice: true;
  master_name: string;
  optionTypeId: string;
  optionsData: personalizeScreenOptionsDataType[];
  type: string;
  value: string[] | null;
};

export type personalizeScreenQuestionsType = {
  question: personalizeScreenQuestionType;
  questionId: string;
  questionSortOrder: number;
};

export type personalizeScreenType = {
  _id: string | null;
  questions: personalizeScreenQuestionsType[];
};

export type personalizeFormUserSelectionType = {
  catId: string;
  image: string;
  master_name: string;
  value: string;
};

export type personalizeFormResponseType = {
  _id: string;
  label: string;
  name: string;
  screens: personalizeScreenType[];
  userSelections: personalizeFormUserSelectionType;
};

export type gqlGetSubscriptionsResponse = {
  _id: string;
  serviceProductId: string;
  serviceProductOrderId: string;
};

export type masterProductSingleSelect = {
  _id: string;
  catId: string;
  image: string;
  name: string;
  note: string;
  personalizeImage: string;
  sortOrder: number;
};

export type gqlGetUserProductRecommendedAttributesResponse = {
  _id: string;
  master_name: string;
  note: string;
  masterData: masterProductSingleSelect;
};

export type masterCategoryType = {
  _id: string;
  image: string;
  isEnabled: boolean;
  label: string;
  name: string;
  personalizeImage: string;
  personalizeNote: string;
  isEnabledForPersonalize: boolean;
};

export type occasionType = {
  _id: string;
  categories: masterCategoryType[];
  label: string;
  name: string;
  occasionType: string;
};

export type gqlProductAttributeMasterFilterType = {
  _id?: string;
  catId?: string;
  masterName: string;
};

export type gqlPersonalizedCategoryConfigAttributeType = {
  label: string;
  master_name: string;
  note: string;
};

type PersonalizedCategoryConfigLabelDesc = {
  description: string;
  label: string;
};

export type gqlGetUserPersonalizePageConfigResponseType = {
  catId: string;
  note: string;
  attributes: gqlPersonalizedCategoryConfigAttributeType[];
  curated_products: PersonalizedCategoryConfigLabelDesc;
  looks: PersonalizedCategoryConfigLabelDesc;
};

export type gqlGetUserPersonalizeResponseType = {
  catId: string;
  note: string;
  attributes: gqlPersonalizedCategoryConfigAttributeType[];
  curated_products: PersonalizedCategoryConfigLabelDesc;
  looks: PersonalizedCategoryConfigLabelDesc;
};

export type gqlProductRecFilterInputType = {
  limit: number;
  page: number;
  params: {
    catId: string;
    isAccessory?: boolean;
    userId: string;
  };
};

export type gqlLookRecFilterInputType = {
  limit: number;
  page: number;
  params: {
    catId: string;
    isAccessory?: boolean;
    userId: string;
  };
};

export type ProductType = {
  _id: string;
  images: string[];
  name: string;
  price: number;
};

export type gqlGetPersonalizedProductsResponse = {
  products: ProductType[];
  totalItemCount: number;
};

export type gqlGetAllBrandPartnerCategoriesResponse = {
  _id: string;
  name: string;
  title: string;
};

export type gqlBrandPartnerBannerType = {};
export type gqlBrandPartnerVideoImageType = {};
export type gqlBrandPartnerOfferType = {};

export type gqlBrandPartnerType = {
  brandPartnerCategoryId: string;
  name: string;
  banner: gqlBrandPartnerBannerType[];
  googleRating: number;
  imageAndVideos: gqlBrandPartnerVideoImageType[];
  isAvailable: boolean;
  note: string;
  offers: gqlBrandPartnerOfferType[];
  sortOrder: number;
  tags: string[];
  title: string;
  url: string;
};
