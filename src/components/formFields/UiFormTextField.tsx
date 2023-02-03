import React, { useState } from "react";
import InputBase from "@mui/material/InputBase";
import FormHelperText from "@mui/material/FormHelperText";
import { UiFormTextFieldProps } from "../../shared/interfaces";
import { useController } from "react-hook-form";
import InputAdornment from "@mui/material/InputAdornment";
import UiIconButton from "../iconButton/iconButton";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import InputLabel from "@mui/material/InputLabel";
import { styled } from "@mui/material";
// or

const StyledRequiredIndication = styled("span")(({ theme }) => ({
  color: theme.palette.error.main,
  marginLeft: theme.spacing(0.5),
}));

const UiFormTextField = ({
  id,
  name,
  control,
  rules,
  defaultValue,
  hintMessage,
  fieldType,
  label,
  iconSx,
  isRequired,
  ...props
}: UiFormTextFieldProps) => {
  const [internalAdornment, setInternalAdornment] =
    useState<React.ReactNode | undefined>(undefined);
  const [showSecret, setShowSecret] = useState<boolean>(
    () => fieldType !== "password"
  );
  const { field, fieldState } = useController({
    name,
    control,
    rules,
    defaultValue,
  });

  const handleShowPassword = () => {
    setShowSecret(!showSecret);
  };

  return (
    <>
      {label && (
        <InputLabel>
          {label}
          {isRequired && <StyledRequiredIndication>*</StyledRequiredIndication>}
        </InputLabel>
      )}
      <InputBase
        fullWidth
        id={id}
        error={fieldState.invalid ? true : false}
        type={fieldType ? (showSecret ? "text" : fieldType) : "text"}
        endAdornment={
          <InputAdornment position="start">
            {fieldType === "password" && (
              <UiIconButton size="small" onClick={handleShowPassword}>
                {showSecret ? (
                  <Visibility sx={iconSx} />
                ) : (
                  <VisibilityOff sx={iconSx} />
                )}
              </UiIconButton>
            )}
          </InputAdornment>
        }
        {...field}
        {...props}
      />
      {hintMessage && !fieldState.error && (
        <FormHelperText>{hintMessage}</FormHelperText>
      )}
      {fieldState.invalid && (
        <FormHelperText error={fieldState.invalid} id={`${id}-error`}>
          {fieldState.error?.message}
        </FormHelperText>
      )}
    </>
  );
};

export default UiFormTextField;
