import { GQL_VALIDATE_VENDOR_PHONE_VERIFICATION } from "../queries";
import { useLazyQuery } from "@apollo/client";

export const useValidateVendorPhoneVerification = () => {
  const [ValidateVendorPhoneVerificationOtp, { loading }] = useLazyQuery(
    GQL_VALIDATE_VENDOR_PHONE_VERIFICATION,
    {
      fetchPolicy: "network-only",
    }
  );

  const gqlValidateVendorPhoneVerificationOtp = async (
    otp: string,
    userId: string
  ) => {
    const response = await ValidateVendorPhoneVerificationOtp({
      variables: {
        otp: otp,
        userId: userId,
      },
    });

    return new Promise((resolve, rejects) => {
      if (response?.data && !response.error) {
        resolve("VALIDATED OTP SUCCESSFULLY");
      }
      rejects("PLEASE PROVIDE VALID OTP");
    });
  };

  return {
    gqlValidateVendorPhoneVerificationOtp,
    loading,
  };
};
