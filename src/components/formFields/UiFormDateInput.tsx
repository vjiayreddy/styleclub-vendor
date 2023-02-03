import React from "react";
import dayjs, { Dayjs } from "dayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { MobileDatePicker } from "@mui/x-date-pickers/MobileDatePicker";
import TextField from "@mui/material/TextField";
import { InputLabel, styled } from "@mui/material";
import { UiFormDateInputProps } from "../../shared/interfaces";
import { Controller, useController } from "react-hook-form";

const UiFormDateInput = ({
  id,
  name,
  label,
  isRequired,
  control,
  rules,
  defaultValue,
}: UiFormDateInputProps) => {
  const [value, setValue] = React.useState<Dayjs | null>(
    dayjs("2014-08-18T21:11:54")
  );

  useController({
    name,
    control,
    rules,
    defaultValue,
  });

  const StyledRequiredIndication = styled("span")(({ theme }) => ({
    color: theme.palette.error.main,
    marginLeft: theme.spacing(0.5),
  }));

  const handleChange = (newValue: Dayjs | null) => {
    setValue(newValue);
  };

  return (
    <>
      {label && (
        <InputLabel>
          {label}
          {isRequired && <StyledRequiredIndication>*</StyledRequiredIndication>}
        </InputLabel>
      )}
      <Controller
        control={control}
        name={name}
        defaultValue={value}
        rules={rules}
        render={({ field: { ref, onBlur, name, ...field }, fieldState }) => (
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <MobileDatePicker
              {...field}
              inputRef={ref}
              inputFormat="MM/DD/YYYY"
              value={value}
              onChange={handleChange}
              renderInput={(params) => (
                <TextField
                  {...params}
                  variant="standard"
                  name={name}
                  onBlur={onBlur}
                  error={!!fieldState.error}
                  helperText={fieldState.error?.message}
                  InputProps={{ sx: { height: 33 } }}
                />
              )}
            />
          </LocalizationProvider>
        )}
      />
    </>
  );
};

export default UiFormDateInput;
