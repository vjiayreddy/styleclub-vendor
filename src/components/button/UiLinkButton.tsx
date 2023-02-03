import React, { ReactNode } from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";

export interface UiButtonProps extends ButtonProps {
  id: string;
  children: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  startIcon?: ReactNode;
  loadingIcon?: ReactNode;
  endIcon?: ReactNode;
  rounded?: boolean;
}

const StyledLinkButton = styled(Button)(({ theme }) => ({
  height: "auto",
  padding: 0,
  margin: 0,
}));

function UiLinkButton({
  id,
  loading,
  disabled,
  children,
  startIcon,
  endIcon,
  ...props
}: UiButtonProps) {
  return (
    <StyledLinkButton
      variant="text"
      startIcon={startIcon}
      disabled={disabled}
      endIcon={endIcon}
      id={id}
      {...props}
    >
      {children}
    </StyledLinkButton>
  );
}

export default UiLinkButton;
