import { isValidPhoneNumber } from "libphonenumber-js";

const re =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;
export const isValidEmail = (email: string): boolean => re.test(email);

export const isPhoneNumberValid = (phoneNumber: any) => {
  if (phoneNumber) {
    return isValidPhoneNumber(`+${phoneNumber}`);
  } else {
    return false;
  }
};

export const validateEmail = (email: string) => {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email)) {
    return true;
  }
  return "Please enter valid email address";
};

export const validateWebUrl = (webUrl: string) => {
  var validation = webUrl.match(
    /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g
  );

  if (validation) {
    return true;
  }
  return "Please enter valid website url";
};

export const validateGstNo = (value: string) => {
  if (/^[0-9]{2}[A-Z]{5}[0-9]{4}[A-Z]{1}[1-9A-Z]{1}Z[0-9A-Z]{1}$/.test(value)) {
    return true;
  }
  return false;
};
