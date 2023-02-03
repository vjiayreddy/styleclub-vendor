import { useLazyQuery } from "@apollo/client";
import { GET_PERSONALIZED_LOOKS_BY_PRODUCTS } from "../queries";
import { gqlLookRecFilterInputType } from "../../shared/types";
import { useRouter } from "next/router";
import { useSession } from "next-auth/react";
const useGetPersonalizedLooksByProducts = () => {
  const { data: session } = useSession();
  const router = useRouter();
  const [
    GetPersonalizedLooksByProducts,
    { data: dataGPLBP, loading: loadingGPLBP, error: errorGPLBP },
  ] = useLazyQuery<
    { getPersonalizedLooksByProducts: any },
    gqlLookRecFilterInputType
  >(GET_PERSONALIZED_LOOKS_BY_PRODUCTS, {
    errorPolicy:'all',
    onError: (error) => {
      alert(error);
    },
  });

  const gqlGetPersonalizedLooksByProducts = async (params: {
    limit?: number;
    page?: number;
    catId?: string;
    isAccessory?: boolean;
  }) => {
    const response = await GetPersonalizedLooksByProducts({
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
    gqlGetPersonalizedLooksByProducts,
    dataGPLBP,
    loadingGPLBP,
    errorGPLBP,
  };
};

export default useGetPersonalizedLooksByProducts;
