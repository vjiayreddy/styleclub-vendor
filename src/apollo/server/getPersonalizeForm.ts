import {
  ApolloClient,
  ApolloQueryResult,
  NormalizedCacheObject,
} from "@apollo/client";
import {
  personalizeFormFilterType,
  personalizeFormResponseType,
} from "../../shared/types";
import apolloClient from "../index";
import { GET_PERSONALIZE_FORM_BY_ID } from "../queries";
import { DP_FORM_IDS } from "../../shared/enums";

export const gqlGetPersonalizeForm = async (
  params: personalizeFormFilterType
) => {
  const client: ApolloClient<NormalizedCacheObject> = apolloClient;
  const response: ApolloQueryResult<any> = await client.query<
    {
      getPersonalizeForm: personalizeFormResponseType;
    },
    { filter: personalizeFormFilterType }
  >({
    query: GET_PERSONALIZE_FORM_BY_ID,
    variables: {
      filter: {
        Id: params.Id || DP_FORM_IDS.FORM_6_ID,
        userId: params.userId,
        isEdit: params.isEdit,
        name: params.name,
        questionId: params.questionId,
      },
    },
    fetchPolicy: "network-only",
  });
  return response;
};
