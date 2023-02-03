import React, { useState } from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { styled, SxProps } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import { isPhoneNumberValid } from "../../../shared/validations";
import parsePhoneNumber from "libphonenumber-js";

/**
 * Components
 */
import UiButton from "../../../components/button/button";
import UiFormTextField from "../../../components/formFields/UiFormTextField";
import UiFormMobileInput from "../../../components/formFields/UiFormMobileInput";
import UiLinkButton from "../../../components/button/UiLinkButton";
import { UiDialogModal } from "../../../components/models/UiDialogModal";
import UiCallBackForm from "../UiCallBackForm";

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

const UiCreateNewPasswordForm = ({
  sx,
  onSubmit,
  loading,
}: UiLoginFormProps) => {
  const [openModel, setOpenModel] = useState<boolean>(false);
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
    });
  };

  return (
    <StyledLoginFormBox sx={sx}>
      <Grid container spacing={1}>
        <Grid item xs={12}>
          <Typography align="center" gutterBottom variant="h3">
            Create New Password
          </Typography>
          <Typography variant="body1" align="center">
            Your new password must be different from previously used password
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <UiFormTextField
            label="New Password"
            defaultValue=""
            rules={{ required: "Password is required" }}
            fieldType="password"
            placeholder="Password"
            id="new-input-password"
            control={control}
            name="password"
          />
        </Grid>
        <Grid item xs={12}>
          <UiFormTextField
            label="Confirm Password"
            defaultValue=""
            rules={{ required: "Confirm Password is required" }}
            fieldType="password"
            placeholder="Password"
            id="confirm-input-password"
            control={control}
            name="password"
          />
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
            Save
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

export default UiCreateNewPasswordForm;
