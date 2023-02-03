import {
  ApolloClient,
  ApolloQueryResult,
  NormalizedCacheObject,
} from "@apollo/client";
import apolloClient from "../index";
import { GQL_VENDOR_INITIATE_PHONE_VERIFICATION } from "../queries";

export const userVendorInitiatePhoneVerification = async (params: {
  phone: string;
}) => {
  const client: ApolloClient<NormalizedCacheObject> = apolloClient;
  const response: ApolloQueryResult<any> = await client.query<
    { initiateVendorPhoneVerification: { _id: string } },
    { phone: string }
  >({
    query: GQL_VENDOR_INITIATE_PHONE_VERIFICATION,
    variables: params,
    fetchPolicy: "network-only",
  });
  return response;
};
