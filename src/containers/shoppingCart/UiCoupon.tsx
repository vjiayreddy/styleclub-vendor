import React from "react";
import Grid from "@mui/material/Grid";
import UiFormTextField from "../../components/formFields/UiFormTextField";
import { useForm } from "react-hook-form";
import UiButton from "../../components/button/button";

const UiCoupon = () => {
  const { control } = useForm();
  return (
    <Grid container spacing={1} alignItems="end">
      <Grid item xs={6} md={4}>
        <UiFormTextField
          fullWidth={true}
          label="Coupon code:"
          id="coupon_input"
          name="coupon_code"
          control={control}
        />
      </Grid>
      <Grid item>
        <UiButton
          color="secondary"
          onClick={() => {
            return;
          }}
          id="btn_coupon_code"
        >
          Apply
        </UiButton>
      </Grid>
    </Grid>
  );
};

export default UiCoupon;
