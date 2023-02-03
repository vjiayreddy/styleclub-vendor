import React, { useEffect } from "react";
import { Grid, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { isPhoneNumberValid, validateEmail } from "../../../shared/validations";
import UiFormTextField from "../../../components/formFields/UiFormTextField";
import UiFormMobileInput from "../../../components/formFields/UiFormMobileInput";
import { UiVendorFormsProps } from "../../../shared/interfaces";
import { useQuery } from "@apollo/client";
import { GET_REACTIVE_VENDOR_ONBOARD_FORM } from "../../../apollo/queries";
import UiButton from "../../../components/button/button";

const UiVendorDetailsForm = ({
  onSubmit,
  optBtnName,
  onClickOptBtn,
  enableOptButton,
  isSubmit,
}: UiVendorFormsProps) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const { data: dataRVOF } = useQuery(GET_REACTIVE_VENDOR_ONBOARD_FORM);

  useEffect(() => {
    if (dataRVOF?.reactiveVendorOnBoardFormState?.vendorManagerFormState) {
      reset(dataRVOF?.reactiveVendorOnBoardFormState?.vendorManagerFormState);
    }
  }, [dataRVOF.reactiveVendorOnBoardFormState.vendorManagerFormState]);

  return (
    <Grid container spacing={1}>
      <Grid item xs={6}>
        <UiFormTextField
          size="small"
          isRequired={true}
          label="First Name"
          defaultValue=""
          rules={{ required: "First name is required" }}
          fieldType="text"
          placeholder="First Name"
          id="input-first-name"
          control={control}
          name="firstName"
        />
      </Grid>
      <Grid item xs={6}>
        <UiFormTextField
          size="small"
          label="Last Name"
          defaultValue=""
          isRequired={true}
          rules={{
            required: {
              value: true,
              message: "Last name is required",
            },
          }}
          fieldType="text"
          placeholder="Last Name"
          id="input-last-name"
          control={control}
          name="lastName"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        <UiFormMobileInput
          label="Phone 1"
          isRequired={true}
          dropdownStyle={{
            height: 130,
          }}
          inputStyle={{
            height: 33,
          }}
          error={errors ? errors["phone"] : null}
          name="phone"
          rules={{
            validate: isPhoneNumberValid,
          }}
          control={control}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        <UiFormMobileInput
          label="Phone 2"
          isRequired={false}
          dropdownStyle={{
            height: 130,
          }}
          inputStyle={{
            height: 33,
          }}
          error={errors ? errors["phone2"] : null}
          name="phone2"
          rules={{
            validate: isPhoneNumberValid,
          }}
          control={control}
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        <UiFormTextField
          size="small"
          label="Email Address"
          defaultValue=""
          isRequired={true}
          rules={{
            required: {
              value: true,
              message: "Email is required",
            },
            validate: validateEmail,
          }}
          fieldType="text"
          placeholder="Last Name"
          id="input-last-name"
          control={control}
          name="email"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={6} lg={6} xl={6}>
        <UiFormTextField
          size="small"
          label="Password"
          defaultValue=""
          isRequired={true}
          rules={{
            required: {
              value: true,
              message: "Password is requires",
            },
          }}
          fieldType="text"
          placeholder="Password"
          id="input-last-name"
          control={control}
          name="password"
        />
      </Grid>
      <Grid mt={1} item xs={12}>
        {enableOptButton && (
          <Button
            color="secondary"
            sx={{ marginRight: "10px" }}
            onClick={onClickOptBtn}
          >
            {optBtnName}
          </Button>
        )}
        <UiButton
          loading={isSubmit}
          circularProgresss={{
            size: 16,
            color:"secondary"
          }}
          id="btn-submit"
          onClick={handleSubmit(onSubmit)}
        >
          Submit
        </UiButton>
      </Grid>
    </Grid>
  );
};

export default UiVendorDetailsForm;
