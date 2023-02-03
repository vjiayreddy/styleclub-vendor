import { MASTER_FILTERS, OCCASIONS } from "./../../shared/enums";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import { GET_ALL_OCCASIONS } from "../queries";
import { masterCategoryType, occasionType } from "../../shared/types";
import _ from "lodash";
import { useGetProductAttributeMaster } from "./useGetProductAttributeMaster";

export const useGetAllOccasions = () => {
  const [occasions, setOccasion] = useState<masterCategoryType[]>([]);
  const [grooming, setGrooming] = useState<occasionType[]>([]);
  const { gqlGetProductAttributeMaster, dataGPA, loadingGPA } =
    useGetProductAttributeMaster();

  const { data: dataGAO, loading: loadingGAO } =
    useQuery<{ getAllOccasions: occasionType[] }>(GET_ALL_OCCASIONS);

  useEffect(() => {
    gqlGetProductAttributeMaster({
      masterName: MASTER_FILTERS.MASTER_GROOMING_CATEGORIES,
    });
  }, []);

  useEffect(() => {
    if (dataGAO?.getAllOccasions) {
      const occasion = _.find(
        dataGAO.getAllOccasions,
        (_occasion) => _occasion.name === OCCASIONS.PRODUCTS
      );
      if (occasion) {
        setOccasion(occasion.categories);
      }
    }

    if (dataGPA?.getProductAttributeMaster) {
      setGrooming(dataGPA?.getProductAttributeMaster);
    }
  }, [dataGAO, dataGPA]);

  return { occasions, grooming };
};
