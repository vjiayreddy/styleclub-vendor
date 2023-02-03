import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Cookies from "js-cookie";
import { APP_ROUTES } from "../../routes/routes";


const AuthRedirect = (Component: React.FunctionComponent) => {
  const AuthenticatedComponent = (props: any) => {
    const [cookie] = useState(Cookies.get("ADMIN"));
    const router = useRouter();
    useEffect(() => {
      if (!cookie) {
        router.push(APP_ROUTES.LOGIN);
      }
    }, [cookie]);
    return <Component {...props} />;
  };
  return AuthenticatedComponent;
};

export default AuthRedirect;
