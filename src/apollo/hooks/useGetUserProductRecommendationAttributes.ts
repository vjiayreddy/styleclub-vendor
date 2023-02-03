import { AUTH_STATE } from "./../../shared/enums";
import { useEffect, useState } from "react";
import { gqlGetUserPersonalizePageConfigResponseType } from "./../../shared/types";
import { useQuery } from "@apollo/client";
import { gqlUserProductRecommendedAttributesArgs } from "../../shared/interfaces";
import { gqlGetUserProductRecommendedAttributesResponse } from "../../shared/types";
import {
  GET_USER_PERSONALIZE_CONFIG,
  GET_USER_PRODUCT_RECOMMENDED_ATTRIBUTES,
} from "../queries";
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { chunkArray, getMasterNames } from "../../services/personalization";
import _ from "lodash";
import useGetPersonalizedProducts from "./useGetPersonalizedProducts";

const useGetUserProductRecommendationAttributes = () => {
  const { data: session, status } = useSession();
  const [productAttributes, setProductAttributes] = useState<any[]>([]);

  const router = useRouter();

  const {
    data: dataUPC,
    loading: loadingUPC,
    error: errorUPC,
  } = useQuery<
    {
      getUserPersonalizePageConfig: gqlGetUserPersonalizePageConfigResponseType;
    },
    { catId: string }
  >(GET_USER_PERSONALIZE_CONFIG, {
    skip: !router?.query?.catId,
    variables: {
      catId: router?.query?.catId as string,
    },
  });

  const { data: dataGUPRA } = useQuery<
    {
      getUserProductRecommendedAttributes: gqlGetUserProductRecommendedAttributesResponse[];
    },
    { filter: gqlUserProductRecommendedAttributesArgs }
  >(GET_USER_PRODUCT_RECOMMENDED_ATTRIBUTES, {
    skip: !session?.user._id && !dataUPC?.getUserPersonalizePageConfig,
    variables: {
      filter: {
        userId: session?.user._id as string,
        catId: router?.query?.catId as string,
        master_name: getMasterNames(
          dataUPC?.getUserPersonalizePageConfig.attributes
        ),
      },
    },
  });

  useEffect(() => {
    if (dataGUPRA?.getUserProductRecommendedAttributes) {
      let personalizeData: any[] = [];
      const { attributes } =
        dataUPC?.getUserPersonalizePageConfig as gqlGetUserPersonalizePageConfigResponseType;
      const recommendedProducts = _.groupBy(
        dataGUPRA?.getUserProductRecommendedAttributes,
        "master_name"
      );
      if (attributes && recommendedProducts) {
        attributes.map((attribute, index) => {
          if (!_.isEmpty(recommendedProducts[attribute.master_name])) {
            personalizeData.push({
              id: `slider-${index}`,
              label: attribute.label,
              note: attribute.note,
              products: recommendedProducts[attribute.master_name],
              filterProducts: chunkArray(
                recommendedProducts[attribute.master_name],
                3
              ),
            });
          }
        });
      }

      setProductAttributes(personalizeData);
    }
  }, [dataGUPRA]);

  return {
    dataPPC: dataUPC?.getUserPersonalizePageConfig,
    dataUPRA: dataGUPRA?.getUserProductRecommendedAttributes,
    productAttributes,

  };
};

export default useGetUserProductRecommendationAttributes;
