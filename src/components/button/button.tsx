import React, { ReactNode } from "react";
import Button, { ButtonProps } from "@mui/material/Button";
import { styled } from "@mui/material/styles";
import CircularProgresss, {
  CircularProgressProps,
} from "@mui/material/CircularProgress";

export interface UiButtonProps extends ButtonProps {
  id: string;
  children: ReactNode;
  loading?: boolean;
  disabled?: boolean;
  startIcon?: ReactNode;
  loadingIcon?: ReactNode;
  circularProgresss?: CircularProgressProps;
  endIcon?: ReactNode;
  rounded?: boolean;
}

const StyledButton = styled(Button, {
  shouldForwardProp: (prop) => prop !== "rounded",
})<UiButtonProps>(({ rounded, theme }) => ({
  ...(rounded && {
    borderRadius: 100,
  }),
}));

function UiButton({
  id,
  loading,
  disabled,
  children,
  circularProgresss,
  loadingIcon = <CircularProgresss {...circularProgresss} />,
  startIcon,
  endIcon,
  ...props
}: UiButtonProps) {
  return (
    <StyledButton
      startIcon={loading ? loadingIcon : startIcon}
      disabled={disabled}
      endIcon={endIcon}
      id={id}
      {...props}
    >
      {children}
    </StyledButton>
  );
}

export default UiButton;
