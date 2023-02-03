import { makeVar } from "@apollo/client";
interface ErrorStateProps {
  errorTitle?: string;
  errorMessage?: string;
}

interface SuccessStateProps {
  title?: string;
  message?: string;
}

export interface vendorRegistrationFormProps {
  brandPartnerFormState?: {
    brandPartnerCategoryId?: {
      _id: string;
      name: string;
    };
    title?: string;
    name?: string;
    url?: string;
    note?: string;
  };
  vendorDetailsFormState?: {
    title?: string;
    state?: string;
    pinCode?: string;
    gstNo?: string;
    country?: string;
    address?: string;
  };
  vendorManagerFormState?: {
    phone?: string;
    phone2?: string;
    password?: string;
    lastName?: string;
    firstName?: string;
    email?: string;
    countryCode?: string;
  };
}

export const notifyErrorState = makeVar<ErrorStateProps | null>(null);
export const notifySuccessState = makeVar<SuccessStateProps | null>(null);

export const reactiveVendorOnBoardFormState =
  makeVar<vendorRegistrationFormProps | null>({
    brandPartnerFormState: {},
    vendorDetailsFormState: {},
    vendorManagerFormState: {},
  });
