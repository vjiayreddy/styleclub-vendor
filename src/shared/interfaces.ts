import { GridProps, SxProps } from "@mui/material";
import { AutocompleteProps } from "@mui/material/Autocomplete/Autocomplete";
import { InputBaseProps } from "@mui/material/InputBase";
import { Control, FieldValues } from "react-hook-form";
import { checkBoxGroupOptions } from "./types";

export interface UiVendorFormsProps {
  onSubmit: (data: any) => void;
  onNext?: () => void;
  enableOptButton?: boolean;
  optBtnName?: string;
  onClickOptBtn?: () => void;
  isSubmit?: boolean | undefined;
}

export interface UiFormTextFieldProps extends InputBaseProps {
  id: string;
  label?: string;
  name: string;
  control?: Control<FieldValues, object>;
  rules?: any;
  defaultValue?: string;
  hintMessage?: string;
  fieldType?: string;
  iconSx?: SxProps;
  isRequired?: boolean;
}

export interface UiFormDateInputProps extends InputBaseProps {
  id: string;
  label?: string;
  name: string;
  control?: Control<FieldValues, object>;
  rules?: any;
  defaultValue?: string;
  hintMessage?: string;
  fieldType?: string;
  iconSx?: SxProps;
  isRequired?: boolean;
}

export interface UiFormAutocompleteProps {
  id: string;
  label: string | null;
  labelTag?: string;
  options: any[];
  name: string;
  isRequired?: boolean;
  control: Control<FieldValues, object>;
  defaultValue?: any;
  rules?: any;
  fullWidth?: boolean;
  size?: "small" | "medium";
  [x: string]: any;
}

export interface UiFormMobileInputProps {
  name: string;
  control: Control<FieldValues, object>;
  rules?: any;
  error?: any;
  country?: string;
  label?: string;
  isRequired?: boolean;
  inputStyle?: React.CSSProperties | undefined;
  dropdownStyle?: React.CSSProperties | undefined;
}

export interface UiCheckBoxGroupProps {
  id: string;
  name: string;
  control: Control<FieldValues, object>;
  rules?: any;
  error?: any;
  label?: string;
  onChange: (...event: any[]) => void;
  options: checkBoxGroupOptions[] | any[];
  defaultValues?: any;
  variant?: "IMAGE" | "BUTTON" | "NORMAL";
  gridProps?: GridProps;
}

export interface UiRadioGroupProps {
  id?: string;
  name: string;
  control: Control<FieldValues, object>;
  rules?: any;
  error?: any;
  label?: string;
  onChange?: (...event: any[]) => void;
  options: checkBoxGroupOptions[] | any[];
  defaultValues?: any;
  variant?: "IMAGE" | "CHIP" | "NORMAL";
  gridProps?: GridProps;
}

export interface UiUserActionsProps {
  status: any;
  session: any;
}

export interface gqlLoginArgs {
  email: string | null;
  phone: string;
  password: string;
}

export interface gqlRegisterArgs {
  countryCode: string;
  email: string;
  firstName: string;
  lastName: string;
  fullName: string;
  password: string;
  phone: string;
}

export interface gqlUserProductRecommendedAttributesArgs {
  catId?: string;
  userId: string;
  master_name?: string[];
}

export interface User {
  _id: string;
  role: string[];
  firstName: string;
  lastName: string;
  name: string;
  email: string;
  phone: string;
  countryCode: string;
  token: string;
  isMobileVerified: boolean;
  isEmailVerified: boolean;
  images: {
    other: [];
    profile: string;
  };
}

type imageAndVideos = {
  isVideo: boolean;
  note?: string;
  sortOrder?: number;
  type: string;
  url: string;
};
type offers = {};

export interface BrandPartnerInput {
  name: string;
  note?: string;
  url?: string;
  googleRating?: number;
  banner?: imageAndVideos[];
  imageAndVideos?: imageAndVideos[];
  isAvailable?: boolean;
  logo?: imageAndVideos;
  tags?: string[];
  brandPartnerCategoryId: string;
}

export interface BrandPartnerInput {
  name: string;
  note?: string;
  url?: string;
  googleRating?: number;
  banner?: imageAndVideos[];
  imageAndVideos?: imageAndVideos[];
  isAvailable?: boolean;
  logo?: imageAndVideos;
  tags?: string[];
  brandPartnerCategoryId: string;
  title: string;
}

export interface VendorInput {
  address?: string;
  city?: string;
  country?: string;
  note?: string;
  gstNo?: string;
  images?: string[];
  name: string;
  url?: string;
  title: string;
  pinCode?: string;
  state?: string;
  primaryImageIndex?: number;
  brandPartnerId: string;
}
export interface RegisterVendorManagerUserInput {
  countryCode?: string;
  email: string;
  firstName: string;
  lastName: string;
  phone2?: string;
  password: string;
  phone?: string;
  vendorId: string;
}
