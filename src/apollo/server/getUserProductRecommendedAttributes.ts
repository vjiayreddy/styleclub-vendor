import {
  ApolloClient,
  ApolloQueryResult,
  NormalizedCacheObject,
} from "@apollo/client";
import { gqlGetUserProductRecommendedAttributesResponse } from "../../shared/types";
import { gqlUserProductRecommendedAttributesArgs } from "../../shared/interfaces";
import apolloClient from "../index";
import { GET_USER_PRODUCT_RECOMMENDED_ATTRIBUTES } from "../queries";

export const gqlGetUserProductRecommendedAttributes = async (
  params: gqlUserProductRecommendedAttributesArgs
) => {
  const client: ApolloClient<NormalizedCacheObject> = apolloClient;
  const response: ApolloQueryResult<any> = await client.query<
    {
      getSubscriptionsByUserId: gqlGetUserProductRecommendedAttributesResponse[];
    },
    { filter: gqlUserProductRecommendedAttributesArgs }
  >({
    query: GET_USER_PRODUCT_RECOMMENDED_ATTRIBUTES,
    variables: {
      filter: params,
    },
    fetchPolicy: "network-only",
  });
  return response;
};
