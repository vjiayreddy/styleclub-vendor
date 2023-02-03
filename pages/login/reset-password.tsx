import React, { useState } from "react";
import UiLoginForm from "../../src/containers/forms/UiLoginForm";
import { signIn, SignInResponse, getSession } from "next-auth/react";
import { styled } from "@mui/material/styles";
import { Box, Grid } from "@mui/material";
import { useRouter } from "next/router";
import { API_ERRORS, AUTH_STATE } from "../../src/shared/enums";
import { notifyErrorState } from "../../src/apollo/reactiveState";
import UiOtpForm from "../../src/containers/forms/OTP";
import { APP_ROUTES } from "../../src/routes/routes";

// Components
import UiForgotPasswordForm from "../../src/containers/forms/UiForgotPasswordForm";
import UiCreateNewPasswordForm from "../../src/containers/forms/UiCreateNewPasswordForm";

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
  [theme.breakpoints.down('sm')]:{
    width:"95%"
  }
}));

const ResetPasswordScreen = (props: any) => {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState<boolean>(false);
  const [showOTP, setShowOTP] = useState<boolean>(false);
  const [createNewPassword, setCreateNewPassword] = useState<boolean>(false);
  const [source, setSource] = useState<string>("");
  const handleLogin = async (data: any) => {
    setShowOTP(true);
    setSource(`+${data.countryCode} ${data.phone}`);
  };

  return (
    <StyledGridContainer container>
      <Grid item xs={false} md={6} lg={6} sm={6} xl={6}>
        <StyledImageContainer bgImage="https://images.unsplash.com/3/www.madebyvadim.com.jpg?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1482&q=80" />
      </Grid>
      <Grid item xs={12} md={6} lg={6} sm={6} xl={6}>
        <StyledLoginContainer>
          <StyledFormBox>
            {showOTP && !createNewPassword && (
              <UiOtpForm
                source={source}
                onSubmit={() => {
                  setShowOTP(false);
                  setCreateNewPassword(true);
                }}
              />
            )}
            {!showOTP && createNewPassword && (
              <UiCreateNewPasswordForm
                onSubmit={() => {
                  router.push(APP_ROUTES.LOGIN);
                }}
              />
            )}
            {!showOTP && !createNewPassword && (
              <UiForgotPasswordForm loading={isLogin} onSubmit={handleLogin} />
            )}
          </StyledFormBox>
        </StyledLoginContainer>
      </Grid>
    </StyledGridContainer>
  );
};

export async function getServerSideProps(context: any) {
  const session = await getSession(context);
  if (session?.user) {
    return {
      redirect: {
        permanent: false,
        destination: APP_ROUTES.HOME,
      },
    };
  }
  return {
    props: {},
  };
}

export default ResetPasswordScreen;
