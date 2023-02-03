import { useLazyQuery } from "@apollo/client";
import {
  personalizeFormFilterType,
  personalizeFormResponseType,
} from "../../shared/types";
import { GET_PERSONALIZE_FORM_BY_ID } from "../queries";
import { useSession } from "next-auth/react";
export const useGetPersonalizeFormById = () => {
  const { data: session } = useSession();
  const [GetPersonalizeForm, { loading: loadingGPF, data: dataGPF }] =
    useLazyQuery<
      { getPersonalizeForm: personalizeFormResponseType },
      { filter: personalizeFormFilterType }
    >(GET_PERSONALIZE_FORM_BY_ID, {
      fetchPolicy: "network-only",
      notifyOnNetworkStatusChange: true,
    });

  const gqlGetPersonalizeFormById = async (
    params: personalizeFormFilterType
  ) => {
    const response = await GetPersonalizeForm({
      variables: {
        filter: {
          ...params,
          userId: session?.user._id,
          isEdit:true
        },
      },
    });

    return new Promise((resolve, reject) => {
      if (!response?.data && response?.error) {
        reject(response?.error);
      }
      return resolve(response?.data);
    });
  };

  return {
    loadingGPF,
    gqlGetPersonalizeFormById,
    dataGPF,
  };
};
