import React from "react";
import { styled, Box, Grid, Typography, Button } from "@mui/material";
import Divider from "@mui/material/Divider/Divider";
import UiFormTextField from "../../../components/formFields/UiFormTextField";
import { useForm } from "react-hook-form";
import UiFormDateInput from "../../../components/formFields/UiFormDateInput";
import UiButton from "../../../components/button/button";

const StyledMainContainer = styled(Box)(({ theme }) => ({
  width: 400,
  paddingLeft: 16,
}));

const StyledBrandImageView = styled(Box)(({ theme }) => ({
  width: 100,
  height: 100,
  backgroundColor: "red",
}));

const UiVendorSubscriptionForm = () => {
  const { control, handleSubmit } = useForm();
  const onSubmit = (data: any) => {
    console.log(data);
  };
  return (
    <StyledMainContainer>
      <Grid container pt={2} spacing={1}>
        <Grid item xs={12}>
          <Box pb={2}>
            <Typography align="center" variant="h4">
              Subscribe to our Style Club!!
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12}>
          <UiFormTextField
            size="small"
            label="Amount"
            defaultValue=""
            isRequired={true}
            rules={{
              required: {
                value: true,
                message: "Filed is required",
              },
            }}
            fieldType="number"
            placeholder="Amount"
            id="input-amount"
            control={control}
            name="amount"
          />
        </Grid>
        <Grid item xs={6}>
          <UiFormDateInput
            id="input-start-date"
            name="dateRecorded"
            control={control}
            label="Subscription Date"
            isRequired={true}
          />
        </Grid>
        <Grid item xs={6}>
          <UiFormDateInput
            id="input-end-date"
            name="expiryDate"
            control={control}
            label="Expiry Date"
            isRequired={true}
          />
        </Grid>
        <Grid item xs={6}>
          <UiFormTextField
            size="small"
            label="Period Months"
            defaultValue=""
            isRequired={true}
            rules={{
              required: {
                value: true,
                message: "filed is required",
              },
            }}
            fieldType="number"
            placeholder="Period Months"
            id="input-period-months"
            control={control}
            name="periodMonths"
          />
        </Grid>
        <Grid item xs={6}>
          <UiFormTextField
            size="small"
            label="Period Years"
            defaultValue=""
            isRequired={true}
            rules={{
              required: {
                value: true,
                message: "Filed is required",
              },
            }}
            fieldType="number"
            placeholder="Period Years"
            id="input-amount"
            control={control}
            name="periodYears"
          />
        </Grid>
        <Grid item xs={12}>
          <Box mt={1}>
            <UiButton
              onClick={handleSubmit(onSubmit)}
              color="secondary"
              id="btn-submit"
            >
              Submit
            </UiButton>
          </Box>
        </Grid>
      </Grid>
    </StyledMainContainer>
  );
};

export default UiVendorSubscriptionForm;
