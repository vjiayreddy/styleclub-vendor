import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled, SxProps } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { parsePhoneNumber } from "libphonenumber-js";

/**
 * Components
 */
import UiButton from "../../../components/button/button";
import UiFormTextField from "../../../components/formFields/UiFormTextField";
import UiFormMobileInput from "../../../components/formFields/UiFormMobileInput";
import { isPhoneNumberValid, validateEmail } from "../../../shared/validations";
import { gqlRegisterArgs } from "../../../shared/interfaces";

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

const UiRegisterForm = ({ sx, onSubmit, loading }: UiLoginFormProps) => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handleOnSubmit = (data: any) => {
    const phoneNumber = parsePhoneNumber(`+${data.phone}`);
    const params: gqlRegisterArgs = {
      countryCode: phoneNumber.countryCallingCode,
      phone: phoneNumber.nationalNumber,
      email: data.email,
      password: data.password,
      firstName: data.firstName,
      lastName: data.lastName,
      fullName: data.firstName + " " + data.lastName,
    };
    onSubmit(params);
  };

  return (
    <StyledLoginFormBox sx={sx}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h4">
            Create a Account
          </Typography>
        </Grid>
        <Grid item md={6} xs={6}>
          <UiFormTextField
            defaultValue=""
            fieldType="text"
            label="First Name"
            id="register-input-firstName"
            control={control}
            name="firstName"
            rules={{ required: "This is required." }}
          />
        </Grid>
        <Grid item md={6} xs={6}>
          <UiFormTextField
            defaultValue=""
            label="Last Name"
            fieldType="text"
            id="login-input-lastName"
            control={control}
            name="lastName"
            rules={{ required: "This is required." }}
          />
        </Grid>
        <Grid item xs={12}>
          <UiFormMobileInput
            label="Mobile"
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
            defaultValue=""
            fieldType="text"
            label="Email"
            id="register-input-email"
            control={control}
            name="email"
            rules={{
              validate: validateEmail,
            }}
          />
        </Grid>
        <Grid item xs={12}>
          <UiFormTextField
            defaultValue=""
            fieldType="text"
            label="Password"
            id="register-input-password"
            control={control}
            name="password"
            rules={{ required: "This is required." }}
          />
        </Grid>
        <Grid item xs={12}>
          <Box mt={2}>
            <UiButton
              color="secondary"
              fullWidth
              loading={loading}
              circularProgresss={{
                size: 16,
              }}
              id="register-submit-button"
              onClick={handleSubmit(handleOnSubmit)}
            >
              Register
            </UiButton>
          </Box>
        </Grid>
      </Grid>
    </StyledLoginFormBox>
  );
};

export default UiRegisterForm;
