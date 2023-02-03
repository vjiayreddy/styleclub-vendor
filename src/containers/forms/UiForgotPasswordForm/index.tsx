import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled, SxProps } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { isPhoneNumberValid } from "../../../shared/validations";
import parsePhoneNumber from "libphonenumber-js";
import { useRouter } from "next/router";

/**
 * Components
 */
import UiButton from "../../../components/button/button";
import UiFormMobileInput from "../../../components/formFields/UiFormMobileInput";
import UiLinkButton from "../../../components/button/UiLinkButton";
import { APP_ROUTES } from "../../../routes/routes";

interface UiLoginFormProps {
  sx?: SxProps;
  onSubmit: (data: any) => void;
  loading?: boolean;
}

const StyledLoginFormBox = styled(Box, {
  shouldForwardProp: (prop) => prop !== "width",
})<{ width?: number | string }>(({ width, theme }) => ({
  padding: theme.spacing(3),
  width: width,
}));

const UiForgotPasswordForm = ({ sx, onSubmit, loading }: UiLoginFormProps) => {
  const router = useRouter();
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleLogin = (data: any) => {
    const parseNumber = parsePhoneNumber(`+${data?.phone}`);
    onSubmit({
      ...data,
      phone: parseNumber?.nationalNumber,
      countryCode: parseNumber?.countryCallingCode,
    });
  };

  return (
    <StyledLoginFormBox sx={sx}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography align="center" gutterBottom variant="h3">
            Forgot Password?
          </Typography>
          <Typography variant="body1" align="center">
            Please enter your mobile number to receive a verification code
          </Typography>
        </Grid>
        <Grid mt={2} item xs={12}>
          <UiFormMobileInput
            label="Mobile Number"
            error={errors ? errors["phone"] : null}
            name="phone"
            rules={{
              validate: isPhoneNumberValid,
            }}
            control={control}
          />
        </Grid>
        <Grid mt={1} item xs={12}>
          <UiButton
            color="secondary"
            fullWidth
            loading={loading}
            circularProgresss={{
              size: 16,
            }}
            id="login-submit-button"
            onClick={handleSubmit(handleLogin)}
          >
            Send OTP
          </UiButton>
        </Grid>
      </Grid>
      <Box mt={3}>
        <Grid
          spacing={0.2}
          alignItems="center"
          container
          justifyContent="center"
        >
          <Grid item>
            <UiLinkButton
              onClick={() => {
                router.push(APP_ROUTES.LOGIN);
              }}
              sx={(theme) => ({
                fontSize: theme.spacing(1.4),
                textDecoration: "underline",
              })}
              color="secondary"
              id="btn-forgot-password"
            >
              Back to Login
            </UiLinkButton>
          </Grid>
        </Grid>
      </Box>
    </StyledLoginFormBox>
  );
};

export default UiForgotPasswordForm;
