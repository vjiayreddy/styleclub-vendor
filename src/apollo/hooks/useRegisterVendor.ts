import { GQL_GET_VENDORS_BY_FILTER } from "./../queries/index";
import { useMutation } from "@apollo/client";
import { VendorInput } from "../../shared/interfaces";
import { GQL_VENDOR_REGISTER } from "../queries";

const useRegisterVendor = () => {
  const [RegisterVendor, { data: dataRV, loading: loadingRV }] = useMutation<
    {
      registerVendor: { _id: string };
    },
    { vendorInput: VendorInput }
  >(GQL_VENDOR_REGISTER, {
    refetchQueries: [
      {
        query: GQL_GET_VENDORS_BY_FILTER,
        variables: {
          limit: 100,
          page: 1,
        },
      },
    ],
  });

  const gqlRegisterVendor = async (payload: VendorInput) => {
    const response = await RegisterVendor({
      variables: {
        vendorInput: payload,
      },
    });
    return new Promise((resolve, reject) => {
      if (response?.data && !response?.errors) {
        resolve(response?.data);
      }
      reject(response?.errors);
    });
  };
  return {
    gqlRegisterVendor,
    dataRV,
    loadingRV,
  };
};

export default useRegisterVendor;
