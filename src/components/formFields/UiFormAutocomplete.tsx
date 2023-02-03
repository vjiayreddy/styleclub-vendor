import React from "react";
import { Autocomplete, InputBase, InputLabel, styled } from "@mui/material";
import { useController } from "react-hook-form";
import { UiFormAutocompleteProps } from "../../shared/interfaces";
import { FormHelperText } from "@mui/material";

const UiAutocompletedInputForm: React.FC<UiFormAutocompleteProps> = ({
  id,
  name,
  control,
  rules,
  label,
  options,
  defaultValue,
  isRequired,
  fullWidth,
  size,
}) => {
  const { field, fieldState } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  const StyledRequiredIndication = styled("span")(({ theme }) => ({
    color: theme.palette.error.main,
    marginLeft: theme.spacing(0.5),
  }));

  return (
    <>
      {label && (
        <InputLabel>
          {label}
          {isRequired && <StyledRequiredIndication>*</StyledRequiredIndication>}
        </InputLabel>
      )}
      <Autocomplete
        options={options}
        id={id}
        defaultValue={defaultValue}
        {...field}
        onChange={(_, data) => field.onChange(data)}
        renderInput={(params) => {
          const { InputLabelProps, InputProps, ...rest } = params;
          return (
            <InputBase
              {...params.InputProps}
              {...rest}
              fullWidth={fullWidth}
              size={size}
              error={fieldState.error ? true : false}
            />
          );
        }}
      />
      {fieldState?.error && (
        <FormHelperText error>{fieldState.error.message}</FormHelperText>
      )}
    </>
  );
};

export default UiAutocompletedInputForm;
