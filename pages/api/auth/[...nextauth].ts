import { API_ERRORS, AUTH_STATE } from "./../../../src/shared/enums";
import NextAuth, { NextAuthOptions } from "next-auth";
import { NextApiRequest, NextApiResponse } from "next";
import CredentialsProvider from "next-auth/providers/credentials";
import jwt_decode from "jwt-decode";
import { userLogin } from "../../../src/apollo/hooks/useLogin";
import { setCookie } from "nookies";

const nextAuthOptions = (
  req: NextApiRequest,
  res: NextApiResponse
): NextAuthOptions => {
  return {
    session: {
      strategy: "jwt",
      maxAge: 30 * 24 * 60 * 60, // 30 Days
    },
    providers: [
      CredentialsProvider({
        name: "Credentials",
        credentials: {},
        async authorize(credentials: any) {
          try {
            const { data, error }: any = await userLogin({
              email: null,
              password: credentials["password"],
              phone: credentials["source"],
            });
            if (!data && error) {
              throw new Error(error);
            }
            return {
              name: data.vendorLogin.token,
            };
          } catch (error) {
            console.log(error);
            throw new Error(API_ERRORS.LOGIN_FAILED);
          }
        },
      }),
    ],
    events: {},
    pages: {
      signIn: "/login",
    },
    callbacks: {
      jwt: async ({ token, user }) => {
        if (user) token.id = user.id;
        return token;
      },
      signIn: async ({ user }) => {
        const decodeData: any = jwt_decode(user.name as string);
        if (decodeData["isMobileVerified"]) {
          setCookie(
            { res },
            AUTH_STATE.SESSION_TOKEN_DATA,
            user.name as string,
            {
              maxAge: 30 * 24 * 60 * 60,
              path: "/",
            }
          );
          return true;
        } else {
          setCookie(
            { res },
            AUTH_STATE.SESSION_TOKEN_DATA,
            user.name as string,
            {
              maxAge: 30 * 24 * 60 * 60,
              path: "/",
            }
          );
          throw new Error(API_ERRORS.MOBILE_NOT_VERIFIED);
        }
      },
      session: async ({ session }) => {
        const token = session.user?.name;
        const _user: any = jwt_decode(token as string);
        _user["token"] = token;
        session.user = _user as any;
        return session;
      },
    },
    secret: process.env.NEXT_PUBLIC_AUTH_SECRET,
  };
};

export default (req: NextApiRequest, res: NextApiResponse) => {
  return NextAuth(req, res, nextAuthOptions(req, res));
};
