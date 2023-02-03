import React, { useEffect } from "react";
import { Grid, Button } from "@mui/material";
import UiFormTextField from "../../../components/formFields/UiFormTextField";
import { useForm } from "react-hook-form";
import { validateGstNo } from "../../../shared/validations";
import _ from "lodash";
// import UiFormDateInput from "../../../components/formFields/UiFormDateInput";
import { UiVendorFormsProps } from "../../../shared/interfaces";
import { GET_REACTIVE_VENDOR_ONBOARD_FORM } from "../../../apollo/queries";
import { useQuery } from "@apollo/client";

const UiBrandDetailsForm = ({
  onClickOptBtn,
  enableOptButton,
  optBtnName,
  onSubmit,
}: UiVendorFormsProps) => {
  const { control, handleSubmit, reset } = useForm();
  const { data: dataRVOF } = useQuery(GET_REACTIVE_VENDOR_ONBOARD_FORM);
  const handleOnSubmit = (data: any) => {
    onSubmit(data);
  };

  useEffect(() => {
    if (dataRVOF?.reactiveVendorOnBoardFormState?.vendorDetailsFormState) {
      reset(dataRVOF?.reactiveVendorOnBoardFormState?.vendorDetailsFormState);
    }
  }, [dataRVOF.reactiveVendorOnBoardFormState.vendorDetailsFormState]);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6}>
        <UiFormTextField
          label="Vendor Name"
          isRequired={true}
          defaultValue=""
          size="small"
          rules={{ required: "Vendor Name is required" }}
          fieldType="text"
          placeholder="Vendor Name"
          id="input-vendor-name"
          control={control}
          name="title"
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <UiFormTextField
          size="small"
          isRequired={false}
          label="GST NO"
          defaultValue=""
          rules={{
            required: {
              value: false,
              message: "",
            },
            validate: {
              required: (value: any) => {
                if (!_.isEmpty(value)) {
                  if (validateGstNo(value)) {
                    return true;
                  }
                  return "Please enter valid GST number";
                }
                return true;
              },
            },
          }}
          fieldType="text"
          placeholder="GST No"
          id="input-gst-number"
          control={control}
          name="gstNo"
        />
      </Grid>
      <Grid item xs={6} sm={3}>
        <UiFormTextField
          size="small"
          label="City"
          defaultValue=""
          isRequired={false}
          rules={{
            required: {
              value: false,
              message: "",
            },
          }}
          fieldType="text"
          placeholder="City"
          id="input-city"
          control={control}
          name="city"
        />
      </Grid>
      <Grid item xs={6} sm={3}>
        <UiFormTextField
          size="small"
          label="State"
          defaultValue=""
          isRequired={false}
          rules={{
            required: {
              value: false,
              message: "",
            },
          }}
          fieldType="text"
          placeholder="State"
          id="input-state"
          control={control}
          name="state"
        />
      </Grid>
      <Grid item xs={6} sm={3}>
        <UiFormTextField
          size="small"
          label="Country"
          defaultValue=""
          isRequired={false}
          rules={{
            required: {
              value: false,
              message: "",
            },
          }}
          fieldType="text"
          placeholder="Country"
          id="input-country"
          control={control}
          name="country"
        />
      </Grid>
      <Grid item xs={6} sm={3}>
        <UiFormTextField
          size="small"
          label="PinCode"
          defaultValue=""
          isRequired={false}
          rules={{
            required: {
              value: false,
              message: "",
            },
          }}
          fieldType="text"
          placeholder="PinCode"
          id="input-pin-code"
          control={control}
          name="pinCode"
        />
      </Grid>
      <Grid item xs={12}>
        <UiFormTextField
          size="small"
          label="Address"
          defaultValue=""
          multiline={true}
          isRequired={false}
          rules={{
            required: {
              value: false,
              message: "",
            },
          }}
          fieldType="text"
          placeholder="Address"
          id="input-address"
          control={control}
          name="address"
        />
      </Grid>
      {/* <Grid item xs={12} sm={4}>
        <UiFormTextField
          size="small"
          label="Brand Partner Fee"
          defaultValue=""
          isRequired={false}
          rules={{
            required: {
              value: false,
              message: "",
            },
          }}
          fieldType="number"
          placeholder="Brand Partner Fee"
          id="input-brand-fee"
          control={control}
          name="brandPartnerFee"
        />
      </Grid>
      <Grid item xs={12} sm={4}>
        <UiFormDateInput
          id="input-expiry-date"
          name="expiryDate"
          control={control}
          label="Expiry Date"
          isRequired={false}
        />
      </Grid> */}
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
        <Button onClick={handleSubmit(handleOnSubmit)}>Next</Button>
      </Grid>
    </Grid>
  );
};

export default UiBrandDetailsForm;
