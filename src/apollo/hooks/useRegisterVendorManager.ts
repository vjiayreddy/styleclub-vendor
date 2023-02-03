import { useMutation } from "@apollo/client";
import { RegisterVendorManagerUserInput } from "../../shared/interfaces";
import { GQL_GET_VENDORS_BY_FILTER, GQL_VENDOR_MANAGER_REGISTER } from "../queries";

const useRegisterVendorManager = () => {
  const [RegisterVendorManager, { data: dataRVM, loading: loadingRVM }] =
    useMutation<
      {
        registerVendorManager: { _id: string };
      },
      { vendorManager: RegisterVendorManagerUserInput }
    >(GQL_VENDOR_MANAGER_REGISTER, {
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

  const gqlRegisterVendorManager = async (
    payload: RegisterVendorManagerUserInput
  ) => {
    const response = await RegisterVendorManager({
      variables: {
        vendorManager: payload,
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
    gqlRegisterVendorManager,
    dataRVM,
    loadingRVM,
  };
};

export default useRegisterVendorManager;
