import { notifySuccessState, notifyErrorState } from "./../reactiveState/index";
import { useQuery } from "@apollo/client";
import { emptySpaceReplace } from "../../shared/utils";
import {
  GET_REACTIVE_VENDOR_ONBOARD_FORM,
  GQL_GET_VENDORS_BY_FILTER,
} from "../queries";
import useRegisterBrandPartner from "./useRegisterBrandPartner";
import useRegisterVendor from "./useRegisterVendor";
import useRegisterVendorManager from "./useRegisterVendorManager";
import { useLazyQuery } from "@apollo/client";

const useRegisterVendorByVendorAdmin = () => {
  const { gqlRegisterBrandPartner, loadingRBP } = useRegisterBrandPartner();
  const { gqlRegisterVendor, loadingRV } = useRegisterVendor();
  const { gqlRegisterVendorManager, dataRVM } = useRegisterVendorManager();
  const { data: dataRVOF } = useQuery(GET_REACTIVE_VENDOR_ONBOARD_FORM);

  const gqlVendorRegistration = async () => {
    const bradPartnerPayload = {
      isAvailable: true,
      sortOrder: 1,
      ...dataRVOF.reactiveVendorOnBoardFormState.brandPartnerFormState,
      brandPartnerCategoryId:
        dataRVOF.reactiveVendorOnBoardFormState.brandPartnerFormState
          .brandPartnerCategoryId._id,
      name: emptySpaceReplace(
        dataRVOF.reactiveVendorOnBoardFormState.brandPartnerFormState.title,
        "-"
      ),
    };

    gqlRegisterBrandPartner(bradPartnerPayload)
      .then((res_one: any) => {
        const vendorPayload = {
          ...dataRVOF.reactiveVendorOnBoardFormState.vendorDetailsFormState,
          brandPartnerId: res_one?.registerBrandPartner?._id,
          name: emptySpaceReplace(
            dataRVOF.reactiveVendorOnBoardFormState.vendorDetailsFormState
              .title,
            "-"
          ),
        };
        return gqlRegisterVendor(vendorPayload);
      })
      .then((res_two: any) => {
        return notifySuccessState({
          title: "Success!",
          message: "Vendor Registered Successfully",
        });
        // const vendorManagerPayload = {
        //   ...dataRVOF.reactiveVendorOnBoardFormState.vendorManagerFormState,
        //   vendorId: res_two.registerVendor._id,
        // };
        // return gqlRegisterVendorManager(vendorManagerPayload);
      })
      // .then((res_three) => {
      //   console.log(res_three);
      // })
      .catch((error) => {
        return notifyErrorState({
          errorTitle: "Failed!",
          errorMessage: error?.message,
        });
      });
  };

  return {
    gqlVendorRegistration,
    loading: loadingRBP || loadingRV || dataRVM,
  };
};

export default useRegisterVendorByVendorAdmin;
