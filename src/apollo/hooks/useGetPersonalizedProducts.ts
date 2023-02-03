import { useLazyQuery } from "@apollo/client";
import { GET_USER_PERSONALIZED_PRODUCTS } from "../queries";
import {
  gqlProductRecFilterInputType,
  gqlGetPersonalizedProductsResponse,
} from "../../shared/types";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

const useGetPersonalizedProducts = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [
    GetPersonalizedProducts,
    { data: dataGPP, loading: loadingGPP, error: errorGPP },
  ] = useLazyQuery<
    { getPersonalizedProducts: gqlGetPersonalizedProductsResponse },
    gqlProductRecFilterInputType
  >(GET_USER_PERSONALIZED_PRODUCTS);

  const gqlGetPersonalizedProducts = async (params: {
    limit?: number;
    page?: number;
    catId?: string;
    isAccessory?: boolean;
  }) => {
    const response = await GetPersonalizedProducts({
      fetchPolicy: "network-only",
      errorPolicy: "all",
      variables: {
        limit: params.limit as number,
        page: params.page as number,
        params: {
          catId: (router?.query?.catId as string) || (params.catId as string),
          userId: session?.user._id as string,
          isAccessory: params.isAccessory,
        },
      },
    });

    return new Promise((resolve, reject) => {
      if (response?.data && !response?.error) {
        resolve(response?.data);
      }
      reject(response?.error);
    });
  };

  return {
    gqlGetPersonalizedProducts,
    dataGPP,
    loadingGPP,
    errorGPP,
  };
};

export default useGetPersonalizedProducts;
