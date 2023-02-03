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
import UiFormTextField from "../../../components/formFields/UiFormTextField";
import UiFormMobileInput from "../../../components/formFields/UiFormMobileInput";
import UiLinkButton from "../../../components/button/UiLinkButton";
import { UiDialogModal } from "../../../components/models/UiDialogModal";
import UiCallBackForm from "../UiCallBackForm";
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

const UiLoginForm = ({ sx, onSubmit, loading }: UiLoginFormProps) => {
  const [openModel, setOpenModel] = useState<boolean>(false);
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
            Sign In
          </Typography>
        </Grid>
        <Grid item xs={12}>
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
        <Grid item xs={12}>
          <UiFormTextField
            label="Password"
            defaultValue=""
            rules={{ required: "Password is required" }}
            fieldType="password"
            placeholder="Password"
            id="login-input-password"
            control={control}
            name="password"
          />
        </Grid>
        <Grid item container justifyContent="flex-end" xs={12}>
          <UiLinkButton
            sx={(theme) => ({
              fontSize: theme.spacing(1.3),
              textDecoration: "underline",
            })}
            color="secondary"
            id="btn-forgot-password"
            onClick={() => {
              router.push(APP_ROUTES.RESET_PASSWORD);
            }}
          >
            Forgot Password?
          </UiLinkButton>
        </Grid>
        <Grid item xs={12}>
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
            Login
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
            <Typography variant="body1">Don't have an account?</Typography>
          </Grid>
          <Grid item>
            <UiLinkButton
              onClick={() => {
                setOpenModel(true);
              }}
              sx={(theme) => ({
                fontSize: theme.spacing(1.4),
                textDecoration: "underline",
              })}
              color="secondary"
              id="btn-forgot-password"
            >
              Contact Here
            </UiLinkButton>
          </Grid>
        </Grid>
      </Box>
      <UiDialogModal
        onCloseModel={() => {
          setOpenModel(false);
        }}
        maxWidth="sm"
        open={openModel}
      >
        <UiCallBackForm />
      </UiDialogModal>
    </StyledLoginFormBox>
  );
};

export default UiLoginForm;
