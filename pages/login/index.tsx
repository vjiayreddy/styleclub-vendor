import React, { useState } from "react";
import UiLoginForm from "../../src/containers/forms/UiLoginForm";
import { signIn, SignInResponse, getSession } from "next-auth/react";
import { styled } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";
import { useRouter } from "next/router";
import { API_ERRORS } from "../../src/shared/enums";
import { notifyErrorState } from "../../src/apollo/reactiveState";
import UiOtpForm from "../../src/containers/forms/OTP";
import { APP_ROUTES } from "../../src/routes/routes";
import { getTokenData } from "../../src/shared/utils";
import { User } from "../../src/shared/interfaces";
import { useValidateVendorPhoneVerification } from "../../src/apollo/hooks/useValidateVendorPhoneVerificationOtp";

const StyledGridContainer = styled(Grid)(({ theme }) => ({
  height: "100vh",
}));

const StyledImageContainer = styled(Grid, {
  shouldForwardProp: (prop) => prop !== "bgImage",
})<{ bgImage: string }>(({ theme, bgImage }) => ({
  height: "100%",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundImage: `url(${bgImage})`,
}));
const StyledLoginContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  overflowX: "hidden",
  overflowY: "auto",
}));

const StyledFormBox = styled(Box)(({ theme }) => ({
  width: "60%",
  [theme.breakpoints.down("sm")]: {
    width: "95%",
  },
}));

interface LoginPageProps {
  userCookie: User;
}

// client side render
const LoginPage = ({ userCookie }: LoginPageProps) => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [showOTP, setShowOTP] = useState<boolean>(false);
  const [source, setSource] = useState<string | null>(null);
  const { gqlValidateVendorPhoneVerificationOtp, loading } =
    useValidateVendorPhoneVerification();

  const handleLogin = async (data: any) => {
    setIsLogin(true);
    setSource(`+${data.countryCode} ${data.phone}`);
    const response: SignInResponse | undefined = await signIn("credentials", {
      redirect: false,
      source: data.phone,
      password: data.password,
    });
    if (response?.error) {
      setIsLogin(false);
      if (response.error === API_ERRORS.MOBILE_NOT_VERIFIED) {
        return setShowOTP(true);
      }
      return notifyErrorState({
        errorTitle: "Login Failed",
        errorMessage: "Login Failed Please try again...",
      });
    } else {
      console.log(response);
      router.push(APP_ROUTES.VENDORS);
    }
  };

  const handleOtp = async (otp: string) => {
    await gqlValidateVendorPhoneVerificationOtp(otp, userCookie._id);
  };

  return (
    <StyledGridContainer container>
      <Grid item xs={false} md={6} lg={6} sm={6} xl={6}>
        <StyledImageContainer bgImage="https://images.unsplash.com/3/www.madebyvadim.com.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1482&q=80" />
      </Grid>
      <Grid item xs={12} md={6} lg={6} sm={6} xl={6}>
      
        <StyledLoginContainer>
        <Box p={2}>
          <img width={200} src="images/mpfstylelogo.png" alt="brand_logo" />
        </Box>
          <StyledFormBox>
            {showOTP ? (
              <UiOtpForm source={source as string} onSubmit={handleOtp} />
            ) : (
              <UiLoginForm loading={isLogin} onSubmit={handleLogin} />
            )}
          </StyledFormBox>
        </StyledLoginContainer>
      </Grid>
    </StyledGridContainer>
  );
};

// server side render
export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  const userCookie = await getTokenData(context);
  if (session?.user) {
    return {
      redirect: {
        permanent: false,
        destination: APP_ROUTES.HOME,
      },
    };
  }
  return {
    props: {
      userCookie,
    },
  };
}

export default LoginPage;
