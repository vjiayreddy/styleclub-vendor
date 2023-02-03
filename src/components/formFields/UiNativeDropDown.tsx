import React from "react";
import { styled } from "@mui/material";

export type optionType = {
  _id: string;
  label: string;
};

interface UiNativeDropDownProps {
  id: string;
  options: optionType[];
  name?: string;
  onChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
}

const StyledSelect = styled("select")(({ theme }) => ({
  height: 38,
  border: `1px solid ${theme.palette.divider}`,
  minWidth: "150px",
  paddingLeft: "5px",
}));

const UiNativeDropDown = ({
  id,
  options,
  name,
  onChange,
}: UiNativeDropDownProps) => {
  return (
    <StyledSelect onChange={onChange} name={name} id={id}>
      {options.map((item, index) => (
        <option key={index} value={item._id}>
          {item.label}
        </option>
      ))}
    </StyledSelect>
  );
};

export default UiNativeDropDown;
