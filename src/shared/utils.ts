import { AUTH_STATE } from "./enums";
import parsePhoneNumber from "libphonenumber-js";
import nookies from "nookies";
import { User } from "./interfaces";
import jwt_decode from "jwt-decode";

export const getMobileNumberInfo = (mobile: string) => {
  const phoneNumber = parsePhoneNumber(mobile);
  return phoneNumber;
};

export const getTokenData = (ctx: any) => {
  const authToken = nookies.get(ctx);
  if (authToken && authToken["session-token"]) {
    const session_data: User | any = jwt_decode(
      authToken["session-token"]
    );
    return session_data;
  }
  return null;
};

export const emptySpaceReplace = (value: string, replace: string): string => {
  return value.replace(/\s/g, replace);
};
