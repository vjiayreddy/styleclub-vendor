import React from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { Controller } from "react-hook-form";
import InputLabel from "@mui/material/InputLabel";
import { UiFormMobileInputProps } from "../../shared/interfaces";
import { FormHelperText, styled } from "@mui/material";

const StyledRequiredIndication = styled("span")(({ theme }) => ({
  color: theme.palette.error.main,
  marginLeft: theme.spacing(0.5),
}));

const UiFormMobileInput: React.FC<UiFormMobileInputProps> = ({
  name,
  control,
  rules,
  error,
  country,
  label,
  isRequired,
  inputStyle,
  dropdownStyle,
}) => {
  return (
    <div className="phone-input">
      {label && (
        <InputLabel>
          {label}
          {isRequired && <StyledRequiredIndication>*</StyledRequiredIndication>}
        </InputLabel>
      )}
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field: { onChange, value } }) => (
          <PhoneInput
            dropdownStyle={dropdownStyle}
            inputStyle={
              inputStyle
                ? inputStyle
                : {
                    height: 43,
                  }
            }
            enableSearch={true}
            disableSearchIcon={true}
            country={country ? country : "in"}
            value={value}
            onChange={onChange}
          />
        )}
      />
      {error && (
        <FormHelperText error={true}>
          Please enter valid mobile number
        </FormHelperText>
      )}
    </div>
  );
};

export default UiFormMobileInput;
