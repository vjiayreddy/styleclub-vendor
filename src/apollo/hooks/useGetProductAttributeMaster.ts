import { GET_PRODUCT_ATTRIBUTES } from "../queries/index";
import { useLazyQuery } from "@apollo/client";
import {
  gqlProductAttributeMasterFilterType,
  occasionType,
} from "../../shared/types";
import _ from "lodash";

export const useGetProductAttributeMaster = () => {
  const [GetProductAttributeMaster, { data: dataGPA, loading: loadingGPA }] =
    useLazyQuery<
      {
        getProductAttributeMaster: occasionType[];
      },
      { filter: gqlProductAttributeMasterFilterType }
    >(GET_PRODUCT_ATTRIBUTES);

  const gqlGetProductAttributeMaster = async (
    params: gqlProductAttributeMasterFilterType
  ) => {
    const response = await GetProductAttributeMaster({
      variables: {
        filter: params,
      },
    });

    return new Promise((resolve, rejects) => {
      if (response?.data?.getProductAttributeMaster && !response.error) {
        resolve(response.data);
      } else {
        rejects(response.error);
      }
    });
  };

  return {
    gqlGetProductAttributeMaster,
    loadingGPA,
    dataGPA,
  };
};
