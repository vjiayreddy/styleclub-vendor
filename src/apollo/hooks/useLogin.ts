import { gqlLoginResponse } from "./../../shared/types";
import { gqlLoginArgs } from "./../../shared/interfaces";
import {
  ApolloClient,
  ApolloQueryResult,
  NormalizedCacheObject,
} from "@apollo/client";
import apolloClient from "../index";
import { GQL_VENDOR_LOGIN } from "../queries";
import jwt_decode from "jwt-decode";
import { userVendorInitiatePhoneVerification } from "./useInitiateVendorPhoneVerification";
import Cookies from "js-cookie";

import { AUTH_STATE } from "../../shared/enums";

export const userLogin = async (params: gqlLoginArgs) => {
  const client: ApolloClient<NormalizedCacheObject> = apolloClient;
  const response: ApolloQueryResult<any> = await client.query<
    { vendorLogin: gqlLoginResponse },
    gqlLoginArgs
  >({
    query: GQL_VENDOR_LOGIN,
    variables: params,
    fetchPolicy: "network-only",
  });

  if (response?.data) {
    console.log(response.data);
    const tokenData: any = jwt_decode(response.data.vendorLogin.token);
    //Cookies.set("token",response.data.vendorLogin.token);
    if (tokenData && !tokenData["isMobileVerified"]) {
      await userVendorInitiatePhoneVerification({
        phone: tokenData["phone"],
      });
    }
  }
  return response;
};
