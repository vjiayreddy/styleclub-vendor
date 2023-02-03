import React, { useEffect, useState } from "react";
import { Grid, Button } from "@mui/material";
import { useForm } from "react-hook-form";
import { validateWebUrl } from "../../../shared/validations";
import UiFormTextField from "../../../components/formFields/UiFormTextField";
import UiAutocompletedInputForm from "../../../components/formFields/UiFormAutocomplete";
import useGetAllBrandPartnerCategories from "../../../apollo/hooks/useGetAllBrandPartnerCategories";
import { UiVendorFormsProps } from "../../../shared/interfaces";
import { useQuery, useReactiveVar } from "@apollo/client";
import { GET_REACTIVE_VENDOR_ONBOARD_FORM } from "../../../apollo/queries";

const UiBrandPartnerForm = ({ onSubmit }: UiVendorFormsProps) => {
  const { control, handleSubmit, reset } = useForm();
  const { data: dataRVOF } = useQuery(GET_REACTIVE_VENDOR_ONBOARD_FORM);
  const [categories, setCategories] = useState<any[]>([]);
  const { gqlGetAllBrandPartnerCategories } = useGetAllBrandPartnerCategories();
  const handleOnSubmit = (data: any) => {
    onSubmit(data);
  };

  useEffect(() => {
    gqlGetAllBrandPartnerCategories().then((data: any) => {
      setCategories(data);
    });
  }, []);

  useEffect(() => {
    if (dataRVOF?.reactiveVendorOnBoardFormState?.brandPartnerFormState) {
      reset(dataRVOF?.reactiveVendorOnBoardFormState?.brandPartnerFormState);
    }
  }, [dataRVOF?.reactiveVendorOnBoardFormState?.brandPartnerFormState]);

  return (
    <Grid container spacing={1}>
      <Grid item xs={12} sm={6}>
        <UiAutocompletedInputForm
          id="input-category"
          control={control}
          isRequired={true}
          size="small"
          label="Category"
          options={categories}
          name="brandPartnerCategoryId"
          defaultValue={null}
          rules={{ required: "Category is Required" }}
        />
      </Grid>
      <Grid item xs={12} sm={6}>
        <UiFormTextField
          size="small"
          isRequired={true}
          label="Brand Partner Name"
          defaultValue=""
          rules={{ required: "Brand partner name is required" }}
          fieldType="text"
          placeholder="Brand Partner Name"
          id="input-brand-partner"
          control={control}
          name="title"
        />
      </Grid>
      <Grid item xs={12}>
        <UiFormTextField
          size="small"
          label="Website Url"
          defaultValue=""
          isRequired={true}
          rules={{
            required: {
              value: true,
              message: "Website Url is required",
            },
            validate: validateWebUrl,
          }}
          fieldType="text"
          placeholder="Website Url"
          id="input-webUrl"
          control={control}
          name="url"
        />
      </Grid>
      <Grid item xs={12}>
        <UiFormTextField
          label="Note"
          size="small"
          defaultValue=""
          required={true}
          multiline={true}
          rows={3}
          rules={{ required: {} }}
          fieldType="text"
          placeholder="Note"
          id="input-note"
          control={control}
          name="note"
        />
      </Grid>
      <Grid mt={1} item xs={12}>
        <Button onClick={handleSubmit(handleOnSubmit)}>Next</Button>
      </Grid>
    </Grid>
  );
};

export default UiBrandPartnerForm;
