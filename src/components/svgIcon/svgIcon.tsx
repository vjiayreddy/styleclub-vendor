import React from "react";
import SvgIcon, { SvgIconProps } from "@mui/material/SvgIcon";
import { Icons } from "../../theme/icons";
import { iconType } from "../../theme/types";
import { styled } from "@mui/material/styles";

interface UiSvgIconProps extends SvgIconProps {
  children?: React.ReactNode;
  iconName: iconType;
}

const StyledSvgIcon = styled(SvgIcon)(() => ({
  "&.MuiSvgIcon-root": {
    cursor: "pointer",
  },
}));

const UiSvgIcon = ({ iconName, children, ...props }: UiSvgIconProps) => {
  const MappedIcon = Icons.find((item) => item.name === iconName);
  return <StyledSvgIcon {...props}>{MappedIcon?.iconComponent}</StyledSvgIcon>;
};

export default UiSvgIcon;
