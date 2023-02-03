import { useState } from "react";
import { useLazyQuery } from "@apollo/client";
import { GET_ALL_BRAND_PARTNERS } from "../queries";
import { gqlGetAllBrandPartnerCategoriesResponse } from "../../shared/types";

const useGetAllBrandPartnerCategories = () => {
  const [GetAllBrandPartnerCategories, { loading: loadingGABPC }] =
    useLazyQuery<
      {
        getAllBrandPartnerCategories: gqlGetAllBrandPartnerCategoriesResponse[];
      },
      {}
    >(GET_ALL_BRAND_PARTNERS);

  const gqlGetAllBrandPartnerCategories = async () => {
    const response = await GetAllBrandPartnerCategories({
      fetchPolicy: "network-only",
    });
    return new Promise((resolve, reject) => {
      if (response?.data && !response.error) {
        const { getAllBrandPartnerCategories } = response.data;
        let _categories: any[] = [];
        if (getAllBrandPartnerCategories.length > 0) {
          getAllBrandPartnerCategories.map((item) => {
            const payload = {
              _id: item._id,
              label: item.title,
            };
            _categories.push(payload);
          });
        }
        resolve(_categories);
      }
      reject(response?.error);
    });
  };

  return {
    gqlGetAllBrandPartnerCategories,
    loadingGABPC,
  };
};

export default useGetAllBrandPartnerCategories;
