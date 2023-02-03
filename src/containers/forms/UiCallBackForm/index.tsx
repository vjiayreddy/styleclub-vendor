import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import { useForm } from "react-hook-form";
import PersonIcon from "@mui/icons-material/Person";
import MarkunreadIcon from "@mui/icons-material/Markunread";
import PhoneAndroidIcon from "@mui/icons-material/PhoneAndroid";

// Components
import UiButton from "../../../components/button/button";
import UiFormTextField from "../../../components/formFields/UiFormTextField";

const StyledMainBox = styled(Box)(({ theme }) => ({
  width: 400,
  position: "relative",
  padding: 25,
}));

const StyledFormBox = styled(Box)(({ theme }) => ({
  width: "85%",
  margin: "0 auto",
}));

const StyledSpan = styled("span")(({ theme }) => ({
  color: theme.palette.primary.main,
}));

const UiCallBackForm = () => {
  const { control, handleSubmit } = useForm();

  const onSubmit = (data: any) => {
    console.log(data);
  };

  return (
    <StyledMainBox>
      <Grid container spacing={2} flexDirection="column">
        <Grid item xs={12}>
          <Box mb={1}>
            <Typography variant="h3" align="center">
              Request a <StyledSpan>call back</StyledSpan>
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <StyledFormBox>
            <Grid item spacing={1} xs={12} container>
              <Grid item xs={12}>
                <UiFormTextField
                  startAdornment={
                    <PersonIcon
                      sx={(theme) => ({
                        marginLeft: 1,
                        color: theme.palette.grey[500],
                      })}
                      fontSize="small"
                    />
                  }
                  label=""
                  defaultValue=""
                  rules={{ required: "Full Name is requires" }}
                  fieldType="text"
                  placeholder="Your Full Name"
                  id="login-input-password"
                  control={control}
                  name="fullName"
                />
              </Grid>
              <Grid item xs={12}>
                <UiFormTextField
                  label=""
                  startAdornment={
                    <PhoneAndroidIcon
                      fontSize="small"
                      sx={(theme) => ({
                        color: theme.palette.grey[500],
                        marginLeft: 1,
                      })}
                    />
                  }
                  defaultValue=""
                  rules={{ required: "Phone Number is required" }}
                  fieldType="text"
                  placeholder="Your Phone Number"
                  id="login-input-password"
                  control={control}
                  name="phone"
                />
              </Grid>
              <Grid item xs={12}>
                <UiFormTextField
                  label=""
                  startAdornment={
                    <MarkunreadIcon
                      sx={(theme) => ({
                        color: theme.palette.grey[500],
                        marginLeft: 1,
                      })}
                      fontSize="small"
                    />
                  }
                  defaultValue=""
                  rules={{ required: "Email Address is required" }}
                  fieldType="text"
                  placeholder="Your Email Address"
                  id="login-input-password"
                  control={control}
                  name="email"
                />
              </Grid>
              <Grid item xs={12}>
                <UiButton
                  color="secondary"
                  fullWidth
                  // loading={loading}
                  circularProgresss={{
                    size: 16,
                  }}
                  id="login-submit-button"
                  onClick={handleSubmit(onSubmit)}
                >
                  Login
                </UiButton>
              </Grid>
            </Grid>
          </StyledFormBox>
        </Grid>
      </Grid>
    </StyledMainBox>
  );
};

export default UiCallBackForm;
