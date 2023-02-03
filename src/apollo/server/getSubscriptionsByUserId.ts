import { gqlGetSubscriptionsResponse } from "./../../shared/types";
import {
  ApolloClient,
  ApolloQueryResult,
  NormalizedCacheObject,
} from "@apollo/client";
import apolloClient from "../index";
import { GET_USER_SUBSCRIPTION_BY_ID } from "../queries";

export const gqlGetSubscriptionsByUserId = async (userId: string) => {
  const client: ApolloClient<NormalizedCacheObject> = apolloClient;
  const response: ApolloQueryResult<any> = await client.query<
    { getSubscriptionsByUserId: gqlGetSubscriptionsResponse },
    { userId: string }
  >({
    query: GET_USER_SUBSCRIPTION_BY_ID,
    variables: {
      userId,
    },
    fetchPolicy: "network-only",
  });
  return response;
};
