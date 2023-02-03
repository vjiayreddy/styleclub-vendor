import { useMutation } from "@apollo/client";
import { BrandPartnerInput } from "../../shared/interfaces";
import { GQL_BRAND_PARTNER_REGISTER } from "../queries";

const useRegisterBrandPartner = () => {
  const [RegisterBrandPartner, { data: dataRBP, loading: loadingRBP }] =
    useMutation<
      { registerBrandPartner: { _id: string } },
      { body: BrandPartnerInput }
    >(GQL_BRAND_PARTNER_REGISTER);

  const gqlRegisterBrandPartner = async (payload: BrandPartnerInput) => {
    const response = await RegisterBrandPartner({
      variables: {
        body: payload,
      },
    });

    return new Promise((resolve, reject) => {
      if (response?.data && !response?.errors) {
        resolve(response?.data);
      }
      reject(response.errors);
    });
  };

  return {
    gqlRegisterBrandPartner,
    dataRBP,
    loadingRBP,
  };
};

export default useRegisterBrandPartner;
